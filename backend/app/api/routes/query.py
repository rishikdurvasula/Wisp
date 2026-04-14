
from app.services.bm25 import BM25Service
from fastapi import APIRouter

from app.core.config import (
    GROQ_API_KEY,
    HUGGINGFACE_API_TOKEN,
    PINECONE_API_KEY,
    PINECONE_INDEX_HOST,
    PINECONE_INDEX_NAME,
    PINECONE_NAMESPACE,
)
from app.models.requests import QueryRequest
from app.models.responses import Citation, QueryResponse
from app.services.embeddings import CohereEmbeddingClient
from app.services.llm import GroqLLMClient
from app.services.retrieval import RetrievalService
from app.services.vector_store import PineconeClient
from app.services.shared import bm25_service

from app.services.query_classifier import QueryClassifier


router = APIRouter()
bm25_service = BM25Service()
classifier = QueryClassifier()

embedding_client = CohereEmbeddingClient(api_key=HUGGINGFACE_API_TOKEN)
vector_store = PineconeClient(
    api_key=PINECONE_API_KEY,
    index_name=PINECONE_INDEX_NAME or None,
    index_host=PINECONE_INDEX_HOST or None,
    namespace=PINECONE_NAMESPACE,
)
retrieval_service = RetrievalService(
    embedding_client=embedding_client,
    vector_store=vector_store,
    bm25_service=bm25_service,
)
llm_client = GroqLLMClient(api_key=GROQ_API_KEY)


@router.post("/", response_model=QueryResponse)
async def query(request: QueryRequest) -> QueryResponse:
    route_type = classifier.classify(request.query)

    if route_type == "dense":
        results = await retrieval_service.retrieve_dense(
            user_id=request.user_id,
            query=request.query,
            top_k=5,
            doc_id=request.doc_id,
        )
    elif route_type == "sparse":
        results = retrieval_service.retrieve_sparse(
            query=request.query,
            top_k=5,
            doc_id=request.doc_id,
        )
    else:
        results = await retrieval_service.retrieve_hybrid(
            user_id=request.user_id,
            query=request.query,
            top_k=5,
            dense_weight=0.65,
            sparse_weight=0.35,
            doc_id=request.doc_id,
        )

    contexts = [
        {
            "chunk_id": result["id"],
            "title": result.get("metadata", {}).get("title", ""),
            "text": result.get("metadata", {}).get("text", ""),
        }
        for result in results
        if result.get("metadata", {}).get("text")
    ]

    if not contexts:
        return QueryResponse(
            answer="No relevant information found.",
            citations=[],
            retrieval_mode=route_type,
        )

    citations = [
        Citation(
            chunk_id=context["chunk_id"],
            source_title=context["title"],
            snippet=context["text"][:220],
        )
        for context in contexts
    ]

    answer = await llm_client.answer_with_citations(
        query=request.query,
        contexts=contexts,
    )

    return QueryResponse(
        answer=answer,
        citations=citations,
        retrieval_mode=route_type,
    )

@router.get("/debug")
async def debug(user_id: str):
    return vector_store.query(
        vector=[0.0] * 1024,  # Example dummy vector
        top_k=1,
        user_id=user_id,
    )
