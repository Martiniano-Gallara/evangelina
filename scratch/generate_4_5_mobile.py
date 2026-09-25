from PIL import Image, ImageFilter
import numpy as np

# Load source image
prod = Image.open("assets/product-sunset-stripes.jpg")
pw, ph = prod.size

# Target mobile canvas: 800 width x 1000 height (Exact 4:5 aspect ratio)
target_w = 800
target_h = 1000

# Model height: 860px (Head to toe is ~810px)
target_model_h = 860
scale = target_model_h / float(ph)
scaled_w = int(pw * scale)  # 860
scaled_h = int(ph * scale)  # 860

scaled_prod = prod.resize((scaled_w, scaled_h), Image.Resampling.LANCZOS)

# Position model: centered horizontally, 65px headroom at top
model_x = (target_w - scaled_w) // 2  # (800 - 860) // 2 = -30
model_y = 65  # 65px headroom!

# Floor horizon in scaled model is around y = 640 * scale = ~537
horizon_y = model_y + int(640 * scale)

# Extract wall and floor colors
wall_col = np.array(prod.crop((100, 0, 900, 50))).mean(axis=(0,1)).astype(np.uint8)
floor_col = np.array(prod.crop((100, 950, 900, 1024))).mean(axis=(0,1)).astype(np.uint8)

# Create background canvas
bg_arr = np.zeros((target_h, target_w, 3), dtype=np.uint8)
for y in range(target_h):
    if y < horizon_y:
        bg_arr[y, :] = wall_col
    else:
        t = min(1.0, (y - horizon_y) / float(target_h - horizon_y))
        bg_arr[y, :] = ((1 - t * 0.25) * wall_col + (t * 0.25) * floor_col).astype(np.uint8)

bg_img = Image.fromarray(bg_arr).filter(ImageFilter.GaussianBlur(radius=5))

# Soft mask for top and bottom blending
mask = Image.new("L", (scaled_w, scaled_h), 255)
mask_arr = np.full((scaled_h, scaled_w), 255, dtype=np.uint8)

# Top 20px blend
for y in range(25):
    mask_arr[y, :] = int(255 * (y / 25.0))
# Bottom 20px blend
for y in range(25):
    mask_arr[scaled_h - 1 - y, :] = int(255 * (y / 25.0))

mask = Image.fromarray(mask_arr, mode="L")

# Paste model
bg_img.paste(scaled_prod, (model_x, model_y), mask)

# Save to assets/hero-sunset-mobile.jpg and scratch
bg_img.save("assets/hero-sunset-mobile.jpg", quality=95)
bg_img.save("scratch/test_hero_mobile_4_5.jpg", quality=95)
print("Successfully generated 4:5 hero-sunset-mobile.jpg:", bg_img.size)
