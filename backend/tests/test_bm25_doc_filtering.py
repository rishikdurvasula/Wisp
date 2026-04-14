import pytest

from app.services.bm25 import BM25Service


def test_bm25_doc_filtering():
    svc = BM25Service()

    texts = [
        "Apple banana orange.",
        "Purple grape apple.",
        "Banana pear melon.",
    ]

    metadatas = [
        {"chunk_id": "c1", "doc_id": "docA"},
        {"chunk_id": "c2", "doc_id": "docB"},
        {"chunk_id": "c3", "doc_id": "docA"},
    ]

    svc.add_documents(texts, metadatas)

    # search without doc filter should return results from both documents
    all_results = svc.search("apple", top_k=10)
    assert any(r["metadata"]["doc_id"] == "docB" for r in all_results)

    # search with doc filter should only return results for that doc
    docA_results = svc.search("apple", top_k=10, doc_id="docA")
    assert len(docA_results) >= 1
    assert all(r["metadata"]["doc_id"] == "docA" for r in docA_results)
