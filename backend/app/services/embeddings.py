import cohere
from typing import List


class CohereEmbeddingClient:
    def __init__(self, api_key: str):
        self.client = cohere.Client(api_key)

    async def embed(self, text: str) -> List[float]:
        if not text.strip():
            raise ValueError("text must be non-empty")

        response = self.client.embed(
            texts=[text],
            model="embed-english-v3.0",
            input_type="search_document"
        )

        return response.embeddings[0]
    

    async def embed_query(self, text: str) -> List[float]:
        response = self.client.embed(
            texts=[text],
            model="embed-english-v3.0",
            input_type="search_query"
        )
        return response.embeddings[0]