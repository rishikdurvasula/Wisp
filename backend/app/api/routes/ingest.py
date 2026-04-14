from app.services.bm25 import BM25Service
from fastapi import APIRouter

from app.core.config import (
    HUGGINGFACE_API_TOKEN,
    PINECONE_API_KEY,
    PINECONE_INDEX_HOST,
    PINECONE_INDEX_NAME,
    PINECONE_NAMESPACE,
)
from app.models.requests import IngestTextRequest
from app.services.embeddings import CohereEmbeddingClient
from app.services.ingestion import IngestionService
from app.services.vector_store import PineconeClient

from app.services.shared import bm25_service


router = APIRouter()

embedding_client = CohereEmbeddingClient(api_key=HUGGINGFACE_API_TOKEN)
vector_store = PineconeClient(
    api_key=PINECONE_API_KEY,
    index_name=PINECONE_INDEX_NAME or None,
    index_host=PINECONE_INDEX_HOST or None,
    namespace=PINECONE_NAMESPACE,
)



ingestion_service = IngestionService(
    embedding_client=embedding_client,
    vector_store=vector_store,
    bm25_service=bm25_service,
)


@router.post("/text")
async def ingest_text(request: IngestTextRequest) -> dict[str, str | int]:
    return await ingestion_service.ingest_text(
        user_id=request.user_id,
        title=request.title,
        raw_text=request.raw_text,
    )