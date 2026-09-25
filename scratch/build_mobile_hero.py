from PIL import Image, ImageFilter
import numpy as np

# Load source
prod = Image.open("assets/product-sunset-stripes.jpg")
pw, ph = prod.size

# Target mobile canvas: 756 width x 1120 height (Ratio: 0.675 ~ 2:3 vertical)
target_w = 756
target_h = 1120

# We want the model to be centered:
# Scale model so height is 940px (from head to toe is ~940 * 0.94 = ~880px)
# Head starts at y = 80px in canvas (80px headroom!)
# Feet end at y ≈ 80 + 940 * 0.96 ≈ 980px in canvas (140px floor room!)
scale = 940 / 1024.0
scaled_w = int(pw * scale)  # 940
scaled_h = int(ph * scale)  # 940

scaled_prod = prod.resize((scaled_w, scaled_h), Image.Resampling.LANCZOS)

# Model paste coordinates:
# Since model is centered around x = scaled_w // 2,
# we place scaled_prod at x = (target_w - scaled_w) // 2
model_x = (target_w - scaled_w) // 2  # (756 - 940) // 2 = -92
model_y = 70  # 70px headroom!

# Background generation:
# Horizon line between wall and floor is at y = 640 in original
horizon_y = model_y + int(640 * scale)  # ~70 + 587 = 657

# Wall color from top:
wall_col = np.array(prod.crop((100, 0, 900, 50))).mean(axis=(0,1))
floor_col = np.array(prod.crop((100, 950, 900, 1024))).mean(axis=(0,1))
print("Wall color:", wall_col)
print("Floor color:", floor_col)

bg_arr = np.zeros((target_h, target_w, 3), dtype=np.uint8)
for y in range(target_h):
    if y < horizon_y:
        bg_arr[y, :] = wall_col
    else:
        # soft floor transition
        t = min(1.0, (y - horizon_y) / (target_h - horizon_y))
        bg_arr[y, :] = (1 - t * 0.3) * wall_col + (t * 0.3) * floor_col

bg_img = Image.fromarray(bg_arr).filter(ImageFilter.GaussianBlur(radius=5))

# Paste scaled_prod onto bg_img
# We create an alpha mask for scaled_prod to blend seamlessly with the extended top and bottom
mask = Image.new("L", (scaled_w, scaled_h), 255)
mask_arr = np.full((scaled_h, scaled_w), 255, dtype=np.uint8)

# Top edge blend (25px)
for y in range(25):
    mask_arr[y, :] = int(255 * (y / 25.0))
# Bottom edge blend (25px)
for y in range(25):
    mask_arr[scaled_h - 1 - y, :] = int(255 * (y / 25.0))

mask = Image.fromarray(mask_arr, mode="L")

bg_img.paste(scaled_prod, (model_x, model_y), mask)

# Save test preview
bg_img.save("scratch/test_hero_mobile.jpg", quality=95)
print("Saved scratch/test_hero_mobile.jpg")
