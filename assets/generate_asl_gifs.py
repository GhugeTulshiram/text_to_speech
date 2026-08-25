import os
import imageio.v2 as imageio

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
IMAGE_DIR = os.path.join(BASE_DIR, "asl_images")
GIF_DIR = os.path.join(BASE_DIR, "asl_gifs")

# Create output folders
os.makedirs(os.path.join(GIF_DIR, "alphabet"), exist_ok=True)
os.makedirs(os.path.join(GIF_DIR, "numbers"), exist_ok=True)

def create_gif(image_folder, output_gif, duration=0.4):
    images = []

    files = sorted(os.listdir(image_folder))

    for file in files:
        if file.lower().endswith((".jpg", ".jpeg", ".png")):
            img_path = os.path.join(image_folder, file)
            try:
                img = imageio.imread(img_path)
                images.append(img)
            except Exception as e:
                print(f"⚠ Skipping {img_path}: {e}")

    if len(images) < 2:
        print(f"⚠ Not enough images in {image_folder}, skipping GIF")
        return

    imageio.mimsave(output_gif, images, duration=duration)
    print(f"✔ Created GIF: {output_gif}")

# ---------- ALPHABETS ----------
alphabet_dir = os.path.join(IMAGE_DIR, "alphabet")
if os.path.exists(alphabet_dir):
    for letter in os.listdir(alphabet_dir):
        folder = os.path.join(alphabet_dir, letter)
        if os.path.isdir(folder):
            create_gif(
                folder,
                os.path.join(GIF_DIR, "alphabet", f"{letter}.gif")
            )

# ---------- NUMBERS ----------
numbers_dir = os.path.join(IMAGE_DIR, "numbers")
if os.path.exists(numbers_dir):
    for number in os.listdir(numbers_dir):
        folder = os.path.join(numbers_dir, number)
        if os.path.isdir(folder):
            create_gif(
                folder,
                os.path.join(GIF_DIR, "numbers", f"{number}.gif")
            )

print("\n🎉 ALL POSSIBLE GIFS GENERATED SUCCESSFULLY")
