from PIL import Image

for name in ["media_1790218853739.jpg", "media_1790218931579.jpg"]:
    path = f"C:/Users/Martiniano Gallará/.gemini/antigravity-ide/brain/d06c0d45-a7b6-4c87-943a-6c36b80ab0b7/.user_uploaded/{name}"
    im = Image.open(path)
    print(name, im.size)
