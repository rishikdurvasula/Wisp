from pydantic import BaseModel, ConfigDict


class IngestTextRequest(BaseModel):
    model_config = ConfigDict(extra="forbid")

    user_id: str
    title: str
    raw_text: str


class QueryRequest(BaseModel):
    model_config = ConfigDict(extra="forbid")

    user_id: str
    query: str
    doc_id: str | None = None