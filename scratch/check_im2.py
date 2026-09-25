from PIL import Image
import numpy as np

folder = "C:/Users/Martiniano Gallará/.gemini/antigravity-ide/brain/d06c0d45-a7b6-4c87-943a-6c36b80ab0b7/.user_uploaded"

im1 = Image.open(f"{folder}/media_1790219222618.jpg")
im2 = Image.open(f"{folder}/media_1790219256070.png")
im3 = Image.open(f"{folder}/media_1790219352397.jpg")

print("im1:", im1.size, im1.mode)
print("im2:", im2.size, im2.mode)
print("im3:", im3.size, im3.mode)

# Let's inspect im2 background
arr2 = np.array(im2.convert("RGB"))
top_col = arr2[0, :, :].mean(axis=0)
bottom_col = arr2[-1, :, :].mean(axis=0)
left_col = arr2[:, 0, :].mean(axis=0)
right_col = arr2[:, -1, :].mean(axis=0)
print("im2 edges:", top_col, bottom_col, left_col, right_col)
