import cv2
import os
import random
import numpy as np

# =========================
# CONFIG
# =========================
LABEL = input("Enter label to augment (a-z or 0-9): ").strip().lower()
AUG_PER_IMAGE = 5  # how many new images per original

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

if LABEL.isdigit():
    IMG_DIR = os.path.join(BASE_DIR, "data", "asl_images", "numbers", LABEL)
else:
    IMG_DIR = os.path.join(BASE_DIR, "data", "asl_images", "alphabet", LABEL)

if not os.path.exists(IMG_DIR):
    raise FileNotFoundError(f"Folder not found: {IMG_DIR}")

images = [f for f in os.listdir(IMG_DIR) if f.endswith(".jpg")]
start_index = len(images)

print(f"Found {len(images)} images for label '{LABEL}'")

# =========================
# AUGMENTATION FUNCTIONS
# =========================
def augment(img):
    h, w = img.shape[:2]

    # random rotation
    angle = random.uniform(-10, 10)
    M = cv2.getRotationMatrix2D((w//2, h//2), angle, 1)
    img = cv2.warpAffine(img, M, (w, h))

    # random brightness
    value = random.randint(-30, 30)
    img = cv2.convertScaleAbs(img, alpha=1, beta=value)

    # random shift
    tx = random.randint(-20, 20)
    ty = random.randint(-20, 20)
    M = np.float32([[1, 0, tx], [0, 1, ty]])
    img = cv2.warpAffine(img, M, (w, h))

    # slight blur (optional)
    if random.random() < 0.3:
        img = cv2.GaussianBlur(img, (5, 5), 0)

    return img

# =========================
# CREATE AUGMENTED IMAGES
# =========================
count = start_index

for img_name in images:
    img_path = os.path.join(IMG_DIR, img_name)
    img = cv2.imread(img_path)

    if img is None:
        continue

    for _ in range(AUG_PER_IMAGE):
        aug = augment(img)
        save_path = os.path.join(IMG_DIR, f"{count:04}.jpg")
        cv2.imwrite(save_path, aug)
        count += 1

print("✅ AUGMENTATION COMPLETE")
print("Total images now:", count)
print("Folder:", IMG_DIR)
