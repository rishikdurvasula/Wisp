from pydantic import BaseModel, ConfigDict


class Citation(BaseModel):
    model_config = ConfigDict(extra="forbid")

    chunk_id: str
    source_title: str
    snippet: str


class QueryResponse(BaseModel):
    model_config = ConfigDict(extra="forbid")

    answer: str
    citations: list[Citation]
    retrieval_mode: str