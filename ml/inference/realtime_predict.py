import os
import time
import cv2
import numpy as np
import tensorflow as tf
import mediapipe as mp

# ======================================================
# 1. LOAD TRAINED MODEL (ABSOLUTE PATH – WINDOWS SAFE)
# ======================================================
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "..", "saved_models", "asl_model.keras")

print("🔍 Loading model from:", MODEL_PATH)

if not os.path.exists(MODEL_PATH):
    raise FileNotFoundError(f"Model file not found at {MODEL_PATH}")

model = tf.keras.models.load_model(MODEL_PATH)
print("✅ Model loaded successfully")

# ======================================================
# 2. LABELS (MATCH MODEL OUTPUT SIZE)
# ======================================================
labels = [
    "HELLO",
    "THANK YOU",
    "YES",
    "NO",
    "I LOVE YOU"
]

# ======================================================
# 3. MEDIAPIPE HANDS INITIALIZATION
# ======================================================
mp_hands = mp.solutions.hands
mp_draw = mp.solutions.drawing_utils

hands = mp_hands.Hands(
    static_image_mode=False,
    max_num_hands=1,
    min_detection_confidence=0.7,
    min_tracking_confidence=0.7
)

# ======================================================
# 4. CAMERA INITIALIZATION (WINDOWS SAFE)
# ======================================================
print("🎥 Opening camera...")
cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)
time.sleep(2)  # camera warm-up

if not cap.isOpened():
    raise RuntimeError("❌ Camera could not be opened")

print("✅ Camera opened successfully")

# ======================================================
# 5. REAL-TIME PREDICTION LOOP
# ======================================================
while True:
    ret, frame = cap.read()
    if not ret:
        print("❌ Failed to read frame from camera")
        break

    # Flip for mirror view
    frame = cv2.flip(frame, 1)

    # Convert to RGB for MediaPipe
    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = hands.process(rgb)

    # If hand detected
    if results.multi_hand_landmarks:
        hand_landmarks = results.multi_hand_landmarks[0]

        landmarks = []
        for lm in hand_landmarks.landmark:
            landmarks.extend([lm.x, lm.y, lm.z])

        # Ensure correct input shape (63 values)
        if len(landmarks) == 63:
            landmarks_np = np.array(landmarks).reshape(1, 63)

            # Predict
            prediction = model.predict(landmarks_np, verbose=0)
            predicted_label = labels[np.argmax(prediction)]

            # Display prediction
            cv2.putText(
                frame,
                f"Sign: {predicted_label}",
                (30, 50),
                cv2.FONT_HERSHEY_SIMPLEX,
                1,
                (0, 255, 0),
                2
            )

        # Draw hand landmarks
        mp_draw.draw_landmarks(
            frame,
            hand_landmarks,
            mp_hands.HAND_CONNECTIONS
        )

    # Show output window
    cv2.imshow("ASL Sign Language Recognition", frame)

    # Exit on ESC key
    if cv2.waitKey(1) & 0xFF == 27:
        print("🛑 Exiting application")
        break

# ======================================================
# 6. CLEANUP
# ======================================================
cap.release()
cv2.destroyAllWindows()
hands.close()
