import os
import cv2
import mediapipe as mp
import numpy as np

# =====================================================
# ABSOLUTE PATH SETUP (WINDOWS SAFE)
# =====================================================
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

DATA_DIR = os.path.join(BASE_DIR, "..", "data", "asl_images")
ALPHABET_DIR = os.path.join(DATA_DIR, "alphabet")
NUMBER_DIR = os.path.join(DATA_DIR, "numbers")

SAVE_DIR = os.path.join(BASE_DIR, "..", "data")
os.makedirs(SAVE_DIR, exist_ok=True)

X_PATH = os.path.join(SAVE_DIR, "X.npy")
Y_PATH = os.path.join(SAVE_DIR, "y.npy")
LABELS_PATH = os.path.join(SAVE_DIR, "labels.txt")

# =====================================================
# VALIDATE PATHS
# =====================================================
if not os.path.exists(ALPHABET_DIR):
    raise FileNotFoundError(f"❌ Alphabet folder not found: {ALPHABET_DIR}")

if not os.path.exists(NUMBER_DIR):
    raise FileNotFoundError(f"❌ Numbers folder not found: {NUMBER_DIR}")

print("✅ Dataset found at:", os.path.abspath(DATA_DIR))

# =====================================================
# MEDIAPIPE HANDS (STABLE API)
# =====================================================
mp_hands = mp.solutions.hands
hands = mp_hands.Hands(
    static_image_mode=True,
    max_num_hands=1,
    min_detection_confidence=0.6
)

X, y = [], []

# =====================================================
# LABEL ORDER (IMPORTANT)
# Numbers first, then Alphabets
# =====================================================
number_labels = sorted(os.listdir(NUMBER_DIR))
alphabet_labels = sorted(os.listdir(ALPHABET_DIR))

labels = number_labels + alphabet_labels
label_map = {label: idx for idx, label in enumerate(labels)}

print("✅ LABEL MAP:")
for k, v in label_map.items():
    print(f"  {v}: {k}")

# =====================================================
# FUNCTION TO PROCESS IMAGES
# =====================================================
def process_folder(base_path, label):
    folder = os.path.join(base_path, label)

    for img_name in os.listdir(folder):
        img_path = os.path.join(folder, img_name)

        img = cv2.imread(img_path)
        if img is None:
            continue

        rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        result = hands.process(rgb)

        if not result.multi_hand_landmarks:
            continue

        landmarks = []
        for lm in result.multi_hand_landmarks[0].landmark:
            landmarks.extend([lm.x, lm.y, lm.z])

        if len(landmarks) == 63:
            X.append(landmarks)
            y.append(label_map[label])

# =====================================================
# PROCESS NUMBERS
# =====================================================
print("🔢 Processing numbers...")
for num in number_labels:
    process_folder(NUMBER_DIR, num)

# =====================================================
# PROCESS ALPHABETS
# =====================================================
print("🔤 Processing alphabets...")
for alpha in alphabet_labels:
    process_folder(ALPHABET_DIR, alpha)

# =====================================================
# SAVE OUTPUT
# =====================================================
X = np.array(X, dtype=np.float32)
y = np.array(y, dtype=np.int32)

np.save(X_PATH, X)
np.save(Y_PATH, y)

with open(LABELS_PATH, "w") as f:
    for label in labels:
        f.write(label + "\n")

hands.close()

print("\n✅ LANDMARK EXTRACTION COMPLETE")
print("X shape:", X.shape)
print("y shape:", y.shape)
print("Saved files:")
print(" -", X_PATH)
print(" -", Y_PATH)
print(" -", LABELS_PATH)
