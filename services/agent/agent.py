import json
import os
from dotenv import load_dotenv
from datetime import datetime, timedelta

load_dotenv()

MODEL = os.getenv("MODEL")
OLLAMA_HOST = os.getenv("OLLAMA_HOST")