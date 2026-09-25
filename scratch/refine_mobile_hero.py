from PIL import Image, ImageFilter
import numpy as np

prod = Image.open("assets/product-sunset-stripes.jpg")
pw, ph = prod.size

target_w = 800
target_h = 1000

# Model height: 860
target_model_h = 860
scale = target_model_h / float(ph)
scaled_w = int(pw * scale)
scaled_h = int(ph * scale)

scaled_prod = prod.resize((scaled_w, scaled_h), Image.Resampling.LANCZOS)
model_x = (target_w - scaled_w) // 2
model_y = 65

# Create background
# Top wall: extend top rows of scaled_prod upwards
top_wall_row = np.array(scaled_prod)[:10, :, :].mean(axis=(0,1))
# Bottom floor: extend bottom rows of scaled_prod downwards
bottom_floor_row = np.array(scaled_prod)[-10:, :, :].mean(axis=(0,1))

bg_arr = np.zeros((target_h, target_w, 3), dtype=np.uint8)

# Horizon around y = model_y + int(640 * scale) = 601
horizon_y = model_y + int(640 * scale)

# Fill background:
# For y < model_y: replicate top row of scaled_prod
top_slice = np.array(scaled_prod)[0, :, :] # shape (scaled_w, 3)
# To fill target_w:
for y in range(model_y):
    bg_arr[y, :] = top_wall_row

# For model region, fill sides if any
bg_arr[model_y:model_y+scaled_h, :] = np.array(scaled_prod)[:, model_x:model_x+target_w]

# For bottom region below model_y + scaled_h:
# Take the actual bottom 30 rows of scaled_prod, and smoothly project them down
bottom_slice = np.array(scaled_prod)[-30:, :, :]
bottom_start = model_y + scaled_h
for y in range(bottom_start, target_h):
    # smooth decay
    offset = min(29, (y - bottom_start))
    bg_arr[y, :] = bottom_floor_row

bg_img = Image.fromarray(bg_arr)
# Slight vertical blur around the seams
# Seam 1: model_y (y=65)
# Seam 2: bottom_start (y=925)
bg_arr_float = np.array(bg_img, dtype=np.float32)

# Smooth transition at top seam (y: 50..80)
for y in range(50, 80):
    t = (y - 50) / 30.0
    bg_arr_float[y] = (1 - t) * top_wall_row + t * bg_arr_float[y]

# Smooth transition at bottom seam (y: 910..950)
for y in range(910, 950):
    t = (y - 910) / 40.0
    bg_arr_float[y] = (1 - t) * bg_arr_float[910] + t * bottom_floor_row

final_img = Image.fromarray(np.clip(bg_arr_float, 0, 255).astype(np.uint8))

# Save
final_img.save("assets/hero-sunset-mobile.jpg", quality=95)
print("Saved seamless assets/hero-sunset-mobile.jpg!")
