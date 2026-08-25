import cv2
import mediapipe as mp
import numpy as np

mp_hands = mp.solutions.hands
hands = mp_hands.Hands(static_image_mode=True, max_num_hands=1)

def extract_landmarks(image_path):
    image = cv2.imread(image_path)
    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    result = hands.process(image_rgb)

    if not result.multi_hand_landmarks:
        return None

    landmarks = []
    for lm in result.multi_hand_landmarks[0].landmark:
        landmarks.extend([lm.x, lm.y, lm.z])

    return np.array(landmarks)

if __name__ == "__main__":
    data = extract_landmarks("../data/raw/sample.jpg")
    print(data)
