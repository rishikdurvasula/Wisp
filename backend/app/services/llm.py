from __future__ import annotations

import httpx


class GroqLLMClient:
    def __init__(
        self,
        api_key: str,
        model: str = "llama-3.1-8b-instant",
        timeout: float = 30.0,
    ) -> None:
        if not api_key:
            raise ValueError("api_key is required")

        self.api_key = api_key
        self.model = model
        self.timeout = timeout
        self.url = "https://api.groq.com/openai/v1/chat/completions"
        self.headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        }

    async def answer_with_citations(self, query: str, contexts: list[dict]) -> str:
        if not query or not query.strip():
            raise ValueError("query must be a non-empty string")
        if not contexts:
            raise ValueError("contexts must be a non-empty list")

        system_prompt = (
            "You are a retrieval-augmented assistant. "
            "Answer only from the provided context. "
            "Be concise and clear. "
            "Do not include citation markers like [1], [2]. "
            "Do not mention chunk_id, titles, or sources. "
            "Do not output 'undefined' or any placeholders. "
            "Return a clean natural language answer."
        )

        context_blocks = [context["text"] for context in contexts]

        user_prompt = (
            f"Answer the question using only the context below.\n\n"
            f"Context:\n{'\n\n'.join(context_blocks)}\n\n"
            f"Question: {query}\n\n"
            "Answer:"
        )

        payload = {
            "model": self.model,
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt},
            ],
        }

        async with httpx.AsyncClient(timeout=self.timeout) as client:
            response = await client.post(
                self.url,
                headers=self.headers,
                json=payload,
            )
            response.raise_for_status()
            data = response.json()

        import re

        answer = data["choices"][0]["message"]["content"].strip()
        answer = re.sub(r"\bundefined\b", "", answer, flags=re.IGNORECASE).strip()

        return answer