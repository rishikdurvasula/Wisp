from __future__ import annotations

from typing import Any

from pinecone import Pinecone


class PineconeClient:
    """Reusable Pinecone wrapper for FastAPI backends."""

    def __init__(
        self,
        api_key: str,
        index_name: str | None = None,
        index_host: str | None = None,
        namespace: str | None = None,
    ) -> None:
        if not api_key:
            raise ValueError("api_key is required")
        if not index_name and not index_host:
            raise ValueError("Either index_name or index_host must be provided")

        self._client = Pinecone(api_key=api_key)
        self._namespace = namespace

        # Pinecone recommends using index_host in production to avoid an extra lookup.
        if index_host:
            self._index = self._client.Index(host=index_host)
        else:
            self._index = self._client.Index(name=index_name)

    def upsert_vector(
        self,
        vector_id: str,
        embedding: list[float],
        metadata: dict[str, Any] | None = None,
    ) -> dict[str, Any]:
        if not vector_id:
            raise ValueError("vector_id is required")
        if not embedding:
            raise ValueError("embedding must be a non-empty list")

        response = self._index.upsert(
            vectors=[
                {
                    "id": vector_id,
                    "values": embedding,
                    "metadata": metadata or {},
                }
            ],
            namespace=self._namespace,
        )
        return self._to_dict(response)
    
    def upsert_batch(
        self,
        vectors: list[dict[str, Any]],
    ) -> dict[str, Any]:
        if not vectors:
            raise ValueError("vectors must be a non-empty list")

        response = self._index.upsert(
            vectors=vectors,
            namespace=self._namespace,
        )
        return response
    

    def query(
        self,
        vector: list[float],
        top_k: int = 10,
        user_id: str | None = None,
        doc_id: str | None = None,
    ) -> list[dict[str, Any]]:
        if not vector:
            raise ValueError("vector must be a non-empty list")
        if top_k <= 0:
            raise ValueError("top_k must be greater than 0")

        query_filter = None
        # build filter that includes both user and document when available
        if user_id and doc_id:
            query_filter = {"user_id": {"$eq": user_id}, "doc_id": {"$eq": doc_id}}
        elif user_id:
            query_filter = {"user_id": {"$eq": user_id}}
        elif doc_id:
            query_filter = {"doc_id": {"$eq": doc_id}}

        print("Querying Pinecone with filter:", query_filter)

        response = self._index.query(
            vector=vector,
            top_k=top_k,
            namespace=self._namespace,
            include_metadata=True,
            include_values=False,
            filter=query_filter,
        )
        print("raw response from Pinecone:", response)

        matches = response.matches
        return [
            {
                "id": match.id,
                "score": match.score,
                "metadata": match.metadata or {},
            }
            for match in matches
        ]

    @staticmethod
    def _to_dict(response: Any) -> dict[str, Any]:
        if hasattr(response, "to_dict"):
            return response.to_dict()
        if isinstance(response, dict):
            return response
        print("Warning: Response is not a dict and does not have to_dict method. Returning empty dict.")
        raise ValueError("Response is not a dict and does not have to_dict method")
