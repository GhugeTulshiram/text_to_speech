import os
import numpy as np
import tensorflow as tf
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# ======================================================
# PATH SETUP (WINDOWS SAFE)
# ======================================================
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

MODEL_PATH = os.path.join(BASE_DIR, "..", "saved_models", "asl_model.keras")
LABELS_PATH = os.path.join(BASE_DIR, "..", "data", "labels.txt")

# ======================================================
# LOAD MODEL
# ======================================================
if not os.path.exists(MODEL_PATH):
    raise FileNotFoundError(f"❌ Model not found: {MODEL_PATH}")

print("✅ Loading model from:", MODEL_PATH)
model = tf.keras.models.load_model(MODEL_PATH)
print("✅ Model loaded")

# ======================================================
# LOAD LABELS (VERY IMPORTANT)
# ======================================================
if not os.path.exists(LABELS_PATH):
    raise FileNotFoundError(f"❌ Labels file not found: {LABELS_PATH}")

with open(LABELS_PATH, "r") as f:
    LABELS = [line.strip() for line in f.readlines()]

NUM_CLASSES = len(LABELS)
print("✅ Labels loaded:", LABELS)
print("✅ Number of classes:", NUM_CLASSES)

# ======================================================
# FASTAPI APP
# ======================================================
app = FastAPI()

# ✅ FIX CORS + OPTIONS ERROR
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # React allowed
    allow_credentials=True,
    allow_methods=["*"],   # POST + OPTIONS
    allow_headers=["*"],
)

# ======================================================
# REQUEST SCHEMA
# ======================================================
class PredictRequest(BaseModel):
    landmarks: list[float]

# ======================================================
# PREDICTION ENDPOINT
# ======================================================
@app.post("/predict")
def predict(req: PredictRequest):
    landmarks = req.landmarks

    # 🔒 Validation
    if len(landmarks) != 63:
        return {
            "prediction": "Invalid",
            "confidence": 0.0
        }

    X = np.array(landmarks, dtype=np.float32).reshape(1, 63)

    preds = model.predict(X, verbose=0)[0]
    index = int(np.argmax(preds))
    confidence = float(preds[index])

    predicted_label = LABELS[index]

    return {
        "prediction": predicted_label,
        "confidence": round(confidence, 3)
    }

# ======================================================
# HEALTH CHECK
# ======================================================
@app.get("/")
def root():
    return {"status": "ASL Prediction API running"}
