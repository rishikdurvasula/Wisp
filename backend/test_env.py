import os
from dotenv import load_dotenv

load_dotenv()

print("PINECONE_API_KEY:", os.getenv("PINECONE_API_KEY"))
print("HUGGINGFACE_API_TOKEN:", os.getenv("HUGGINGFACE_API_TOKEN"))
print("GROQ_API_KEY:", os.getenv("GROQ_API_KEY"))