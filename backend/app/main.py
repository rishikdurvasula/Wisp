from fastapi import FastAPI
from app.api.routes.health import router as health_router
from app.api.routes.ingest import router as ingest_router
from app.api.routes.query import router as query_router

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Wisp API", version="0.1.0")

app.include_router(health_router, prefix="/health", tags=["health"])
app.include_router(ingest_router, prefix="/ingest", tags=["ingest"])
app.include_router(query_router, prefix="/query", tags=["query"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://wisp-chi.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)