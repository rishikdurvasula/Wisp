from __future__ import annotations

from app.services.embeddings import CohereEmbeddingClient
from app.services.vector_store import PineconeClient
from app.services.bm25 import BM25Service


class RetrievalService:
    def __init__(self, embedding_client, vector_store, bm25_service) -> None:
        self.embedding_client = embedding_client
        self.vector_store = vector_store
        self.bm25_service = bm25_service

    async def retrieve_dense(self, user_id: str, query: str, top_k: int = 5, doc_id: str | None = None) -> list[dict]:
        query_embedding = await self.embedding_client.embed_query(query)
        results = self.vector_store.query(
            vector=query_embedding,
            top_k=max(top_k * 3, 10),
            user_id=user_id,
            doc_id=doc_id,
        )
        return self._dedupe_results(results)[:top_k]

    def retrieve_sparse(self, query: str, top_k: int = 5, doc_id: str | None = None) -> list[dict]:
        results = self.bm25_service.search(query=query, top_k=max(top_k * 3, 10), doc_id=doc_id)
        results = self._dedupe_results(results)
        return [r for r in results if r["score"] > 0][:top_k]

    async def retrieve_hybrid(
        self,
        user_id: str,
        query: str,
        top_k: int = 5,
        dense_weight: float = 0.65,
        sparse_weight: float = 0.35,
        doc_id: str | None = None,
    ) -> list[dict]:
        query_embedding = await self.embedding_client.embed_query(query)

        dense_results = self.vector_store.query(
            vector=query_embedding,
            top_k=max(top_k * 3, 10),
            user_id=user_id,
            doc_id=doc_id,
        )
        sparse_results = self.bm25_service.search(
            query=query,
            top_k=max(top_k * 3, 10),
            doc_id=doc_id,
        )

        dense_results = self._dedupe_results(dense_results)
        sparse_results = self._dedupe_results(sparse_results)
        sparse_results = [r for r in sparse_results if r["score"] > 0]

        return self._weighted_fusion(
            query=query,
            dense_results=dense_results,
            sparse_results=sparse_results,
            top_k=top_k,
            dense_weight=dense_weight,
            sparse_weight=sparse_weight,
        )

    def _dedupe_results(self, results: list[dict]) -> list[dict]:
        seen = set()
        deduped = []

        for result in results:
            metadata = result.get("metadata", {}) or {}
            text = (metadata.get("text") or "").strip()
            dedupe_key = text or result["id"]

            if dedupe_key in seen:
                continue

            seen.add(dedupe_key)
            deduped.append(result)

        return deduped

    def _normalize_scores(self, results: list[dict]) -> dict[str, float]:
        if not results:
            return {}

        raw_scores = [float(r["score"]) for r in results]
        min_score = min(raw_scores)
        max_score = max(raw_scores)

        if max_score == min_score:
            return {r["id"]: 1.0 for r in results}

        return {
            r["id"]: (float(r["score"]) - min_score) / (max_score - min_score)
            for r in results
        }

    def _keyword_overlap(self, query: str, text: str) -> float:
        import re

        query_tokens = set(re.sub(r"[^\w\s]", " ", query.lower()).split())
        text_tokens = set(re.sub(r"[^\w\s]", " ", text.lower()).split())

        if not query_tokens or not text_tokens:
            return 0.0

        return len(query_tokens & text_tokens) / len(query_tokens)

    def _weighted_fusion(
        self,
        query: str,
        dense_results: list[dict],
        sparse_results: list[dict],
        top_k: int,
        dense_weight: float,
        sparse_weight: float,
    ) -> list[dict]:
        dense_norm = self._normalize_scores(dense_results)
        sparse_norm = self._normalize_scores(sparse_results)

        merged_docs: dict[str, dict] = {}

        for doc in dense_results:
            merged_docs[doc["id"]] = {
                "id": doc["id"],
                "metadata": doc.get("metadata", {}),
                "dense_score": dense_norm.get(doc["id"], 0.0),
                "sparse_score": 0.0,
            }

        for doc in sparse_results:
            if doc["id"] not in merged_docs:
                merged_docs[doc["id"]] = {
                    "id": doc["id"],
                    "metadata": doc.get("metadata", {}),
                    "dense_score": 0.0,
                    "sparse_score": sparse_norm.get(doc["id"], 0.0),
                }
            else:
                merged_docs[doc["id"]]["sparse_score"] = sparse_norm.get(doc["id"], 0.0)

        final_results = []
        for doc_id, doc in merged_docs.items():
            text = (doc["metadata"].get("text") or "").strip()
            overlap = self._keyword_overlap(query, text)

            final_score = (
                dense_weight * doc["dense_score"]
                + sparse_weight * doc["sparse_score"]
                + 0.15 * overlap
            )

            final_results.append(
                {
                    "id": doc_id,
                    "score": float(final_score),
                    "metadata": doc["metadata"],
                }
            )

        final_results.sort(key=lambda x: x["score"], reverse=True)
        final_results = self._dedupe_results(final_results)
        final_results = self.rerank(query, final_results)
        return final_results[:top_k]
    
    def rerank(self, query: str, results: list[dict]) -> list[dict]:
        import re

        query_tokens = set(re.sub(r"[^\w\s]", " ", query.lower()).split())

        def score(doc):
            text = doc["metadata"].get("text", "").lower()
            text_tokens = set(re.sub(r"[^\w\s]", " ", text).split())

            overlap = len(query_tokens & text_tokens)
            return doc["score"] + 0.3 * overlap

        return sorted(results, key=score, reverse=True)