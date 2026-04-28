# Wisp — Hybrid Retrieval System for Personal Documents

Wisp is a full-stack AI system that allows users to query their personal documents using a hybrid search pipeline that combines:

- Dense retrieval (semantic search via embeddings)
- Sparse retrieval (BM25 keyword matching)
- Intelligent query routing (classifier-based)
- LLM-based answer generation with citations

This project is designed to demonstrate real-world retrieval system design, not just LLM usage.

---

## Live Demo

Link: https://wisp-chi.vercel.app/

Live Demo: https://www.loom.com/share/25448ae2587d417daba95624510ba856


---

## System Overview

User flow:

1. User uploads text
2. Text is chunked and indexed
3. User asks a question
4. Query is classified into:
   - Dense (semantic)
   - Sparse (keyword)
   - Hybrid (combined)
5. Retrieval is performed
6. Results are fused and passed to LLM
7. Answer is generated with citations

## 💡 Why This Project

Most AI apps today are thin wrappers over LLM APIs.

Wisp focuses on:

- Retrieval correctness
- System design
- Query understanding
- Transparent reasoning

---

## What Makes It Different

- Not just generation — **retrieval-first system**
- Explicit hybrid scoring logic
- Visible routing decisions
- Real production deployment

---

## Tech Stack

### Frontend
- Next.js
- TypeScript
- Axios

### Backend
- FastAPI
- Python

### Retrieval
- Pinecone (vector DB)
- BM25 (rank_bm25)

### ML / AI
- Cohere (embeddings)
- Groq / LLaMA 3.1 (LLM)

---

