class QueryClassifier:
    KEYWORD_HINTS = {
        "exact",
        "keyword",
        "find",
        "where",
        "locate",
        "mention",
        "term",
        "phrase",
    }

    SEMANTIC_HINTS = {
        "why",
        "how",
        "explain",
        "summarize",
        "compare",
        "difference",
        "meaning",
    }

    def classify(self, query: str) -> str:
        q = query.lower().strip()
        tokens = set(q.split())

        # question words → semantic
        if tokens & {"who", "what", "when", "where"}:
            return "dense"

        if any(word in tokens for word in self.KEYWORD_HINTS):
            return "sparse"

        if any(word in tokens for word in self.SEMANTIC_HINTS):
            return "dense"

        if '"' in query:
            return "sparse"

        if len(tokens) <= 2:
            return "sparse"

        return "hybrid"