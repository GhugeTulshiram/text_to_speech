import numpy as np
import tensorflow as tf
import os

# ================================
# LOAD DATA
# ================================
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

X_PATH = os.path.join(BASE_DIR, "data", "X.npy")
Y_PATH = os.path.join(BASE_DIR, "data", "y.npy")
LABELS_PATH = os.path.join(BASE_DIR, "data", "labels.txt")

X = np.load(X_PATH)
y = np.load(Y_PATH)

print("✅ Loaded data")
print("X shape:", X.shape)
print("y shape:", y.shape)

# ================================
# LOAD LABELS
# ================================
with open(LABELS_PATH, "r") as f:
    labels = [line.strip() for line in f.readlines()]

NUM_CLASSES = len(labels)

print("✅ Classes:", NUM_CLASSES)
print("Labels:", labels)

# ================================
# MODEL
# ================================
model = tf.keras.Sequential([
    tf.keras.layers.Input(shape=(63,)),
    tf.keras.layers.Dense(256, activation="relu"),
    tf.keras.layers.Dropout(0.4),
    tf.keras.layers.Dense(128, activation="relu"),
    tf.keras.layers.Dense(NUM_CLASSES, activation="softmax")
])

model.compile(
    optimizer="adam",
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"]
)

model.summary()

# ================================
# TRAIN (NO SPLIT)
# ================================
model.fit(
    X,
    y,
    epochs=80,
    batch_size=8,
    shuffle=True
)

# ================================
# SAVE MODEL
# ================================
SAVE_DIR = os.path.join(BASE_DIR, "saved_models")
os.makedirs(SAVE_DIR, exist_ok=True)

MODEL_PATH = os.path.join(SAVE_DIR, "asl_model.keras")
model.save(MODEL_PATH)

print("✅ REAL ASL MODEL TRAINED & SAVED")
print("📦 Model path:", MODEL_PATH)
