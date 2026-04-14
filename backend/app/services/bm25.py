from rank_bm25 import BM25Okapi


class BM25Service:
    def __init__(self):
        self.documents = []
        self.metadatas = []
        self.tokenized_corpus = []
        self.bm25 = None

    def add_documents(self, texts: list[str], metadatas: list[dict]):

        def preprocess(text):
            import re
            text = text.lower()
            text = re.sub(r"[^\w\s]", " ", text)  # remove punctuation
            return text.split()

        tokenized = [preprocess(text) for text in texts]

        self.documents.extend(texts)  # store raw text
        self.metadatas.extend(metadatas)
        self.tokenized_corpus.extend(tokenized)

        self.bm25 = BM25Okapi(self.tokenized_corpus)

    def search(self, query: str, top_k: int = 5, doc_id: str | None = None):
        if not self.bm25:
            return []

        import re
        query = query.lower()
        query = re.sub(r"[^\w\s]", " ", query)
        tokenized_query = query.split()

        scores = self.bm25.get_scores(tokenized_query)

        boosted = []
        for i, score in enumerate(scores):
            metadata = self.metadatas[i]
            # if doc_id provided, skip documents that don't belong to the doc
            if doc_id and metadata.get("doc_id") != doc_id:
                continue

            text = self.documents[i].lower()
            overlap = sum(1 for t in tokenized_query if t in text)
            boosted.append((i, score + 0.5 * overlap))

        ranked = sorted(
            boosted,
            key=lambda x: x[1],
            reverse=True,
        )[:top_k]

        results = []
        for idx, score in ranked:
            metadata = self.metadatas[idx]
            results.append({
                "id": metadata.get("chunk_id", str(idx)),
                "score": float(score),
                "metadata": metadata,
            })

        return results