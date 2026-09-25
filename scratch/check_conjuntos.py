import os
from PIL import Image

folder = "C:/Users/Martiniano Gallará/.gemini/antigravity-ide/brain/d06c0d45-a7b6-4c87-943a-6c36b80ab0b7/.user_uploaded"
files = ["media_1790219222618.jpg", "media_1790219256070.png", "media_1790219352397.jpg"]

for f in files:
    path = os.path.join(folder, f)
    if os.path.exists(path):
        im = Image.open(path)
        print(f"{f}: size={im.size}, format={im.format}")
    else:
        print(f"{f} not found!")
