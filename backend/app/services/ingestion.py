from __future__ import annotations


from uuid import uuid4

from app.services.chunking import chunk_text
from app.services.embeddings import CohereEmbeddingClient
from app.services.vector_store import PineconeClient
from app.services.bm25 import BM25Service


class IngestionService:
    def __init__(
        self,
        embedding_client: CohereEmbeddingClient,
        vector_store: PineconeClient,
        bm25_service: BM25Service,
    ) -> None:
        self.embedding_client = embedding_client
        self.vector_store = vector_store
        self.bm25_service = bm25_service

    async def ingest_text(self, user_id: str, title: str, raw_text: str) -> dict[str, str | int]:
        chunks = chunk_text(raw_text)

        # single document id for this ingestion request
        doc_id = str(uuid4())

        vectors = []
        texts = []
        metadatas = []

        for index, chunk in enumerate(chunks):
            embedding = await self.embedding_client.embed(chunk)
            chunk_id = str(uuid4())

            metadata = {
                "chunk_id": chunk_id,
                "doc_id": doc_id,
                "user_id": user_id,
                "title": title,
                "text": chunk,
                "chunk_index": index,
            }

            vectors.append(
                {
                    "id": chunk_id,
                    "values": embedding,
                    "metadata": metadata,
                }
            )

            texts.append(chunk)
            metadatas.append(metadata)

        # ✅ add to BM25 ONCE
        self.bm25_service.add_documents(texts, metadatas)

        # ✅ upsert to Pinecone
        self.vector_store.upsert_batch(vectors)

        return {
            "chunks_indexed": len(chunks),
            "title": title,
            "doc_id": doc_id,
        }