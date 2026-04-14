from typing import List


def chunk_text(text: str) -> List[str]:
    import re

    # split by sentences
    sentences = re.split(r'(?<=[.!?])\s+', text.strip())

    chunks = []
    current = ""

    for sentence in sentences:
        if len(current) + len(sentence) < 300:
            current += " " + sentence
        else:
            if current:
                chunks.append(current.strip())
            current = sentence

    if current:
        chunks.append(current.strip())

    return chunks
