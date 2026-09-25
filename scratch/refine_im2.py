from PIL import Image, ImageFilter
import numpy as np

folder = "C:/Users/Martiniano Gallará/.gemini/antigravity-ide/brain/d06c0d45-a7b6-4c87-943a-6c36b80ab0b7/.user_uploaded"

# Refine im2
im2 = Image.open(f"{folder}/media_1790219256070.png").convert("RGB")
w2, h2 = im2.size
target_w, target_h = 756, 1024
paste_x = (target_w - w2) // 2  # 142

# Sample wall color and floor color
arr2 = np.array(im2)
# The left strip from x=0 to x=50 has no model:
# Top is wall, bottom is floor.
# Let's create background
bg_arr = np.zeros((target_h, target_w, 3), dtype=np.float32)

# Replicate left 40px across 0..paste_x
left_strip = arr2[:, :40, :]
for x in range(paste_x):
    # smooth gradient from outer color to near-model color
    t = x / paste_x
    col = left_strip[:, int(t * 39), :]
    bg_arr[:, x, :] = col

# Replicate right 40px across (paste_x + w2)..target_w
right_strip = arr2[:, -40:, :]
right_w = target_w - (paste_x + w2)
for x in range(right_w):
    t = x / right_w
    col = right_strip[:, int(t * 39), :]
    bg_arr[:, paste_x + w2 + x, :] = col

# Fill center
bg_arr[:, paste_x:paste_x + w2, :] = arr2

bg_img = Image.fromarray(np.clip(bg_arr, 0, 255).astype(np.uint8))
bg_img = bg_img.filter(ImageFilter.GaussianBlur(radius=3))

# Paste im2 in the center with smooth alpha blend on edges
mask = Image.new("L", (w2, h2), 255)
mask_arr = np.full((h2, w2), 255, dtype=np.uint8)
ramp = 30
for x in range(ramp):
    v = int(255 * (x / ramp))
    mask_arr[:, x] = v
    mask_arr[:, w2 - 1 - x] = v
mask = Image.fromarray(mask_arr, mode="L")

bg_img.paste(im2, (paste_x, 0), mask)
bg_img.save("assets/product-conjunto-blanco-puro.jpg", quality=95)
print("Regenerated product-conjunto-blanco-puro.jpg smoothly!")
