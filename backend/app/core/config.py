import os
from dotenv import load_dotenv

load_dotenv()

PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
PINECONE_INDEX_NAME = os.getenv("PINECONE_INDEX_NAME")
PINECONE_INDEX_HOST = os.getenv("PINECONE_INDEX_HOST")
HUGGINGFACE_API_TOKEN = os.getenv("HUGGINGFACE_API_TOKEN")
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
PINECONE_NAMESPACE = os.getenv("PINECONE_NAMESPACE", "default")