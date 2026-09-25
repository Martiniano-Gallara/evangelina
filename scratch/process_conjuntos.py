import os
from PIL import Image, ImageFilter
import numpy as np

folder = "C:/Users/Martiniano Gallará/.gemini/antigravity-ide/brain/d06c0d45-a7b6-4c87-943a-6c36b80ab0b7/.user_uploaded"

# 1. Conjunto Azul Seersucker (Flutter sleeve)
im1 = Image.open(f"{folder}/media_1790219222618.jpg").convert("RGB")
im1.save("assets/product-conjunto-seersucker-azul.jpg", quality=95)
print("Saved product-conjunto-seersucker-azul.jpg:", im1.size)

# 2. Conjunto Blanco Puro Flare
# Original is 471x1024. Target canvas: 756x1024
im2 = Image.open(f"{folder}/media_1790219256070.png").convert("RGB")
w2, h2 = im2.size
target_w, target_h = 756, 1024

# Create background canvas with the matching studio lighting
canvas2 = Image.new("RGB", (target_w, target_h))
im2_arr = np.array(im2)

# Left and right edge columns of im2
left_edge = im2_arr[:, :20, :].mean(axis=1)   # (1024, 3)
right_edge = im2_arr[:, -20:, :].mean(axis=1) # (1024, 3)

# Paste position for model
paste_x = (target_w - w2) // 2 # (756 - 471) // 2 = 142

bg_arr = np.zeros((target_h, target_w, 3), dtype=np.uint8)
for y in range(target_h):
    # Left side of paste_x
    bg_arr[y, :paste_x] = left_edge[y]
    # Right side of paste_x + w2
    bg_arr[y, paste_x + w2:] = right_edge[y]
    # Middle
    bg_arr[y, paste_x:paste_x + w2] = im2_arr[y, w2//2]

bg_img2 = Image.fromarray(bg_arr).filter(ImageFilter.GaussianBlur(radius=5))

# Soft mask on left and right for seamless blending
mask2 = Image.new("L", (w2, h2), 255)
mask2_arr = np.full((h2, w2), 255, dtype=np.uint8)
blend_w = 40
for x in range(blend_w):
    val = int(255 * (0.5 - 0.5 * np.cos(np.pi * x / blend_w)))
    mask2_arr[:, x] = val
    mask2_arr[:, w2 - 1 - x] = val

mask2 = Image.fromarray(mask2_arr, mode="L")
bg_img2.paste(im2, (paste_x, 0), mask2)
bg_img2.save("assets/product-conjunto-blanco-puro.jpg", quality=95)
print("Saved product-conjunto-blanco-puro.jpg:", bg_img2.size)

# 3. Conjunto Rayas Celeste & Marfil
im3 = Image.open(f"{folder}/media_1790219352397.jpg").convert("RGB")
im3.save("assets/product-conjunto-rayas-celeste.jpg", quality=95)
print("Saved product-conjunto-rayas-celeste.jpg:", im3.size)
