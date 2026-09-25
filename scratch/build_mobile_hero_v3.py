from PIL import Image, ImageFilter
import numpy as np

# Load source
prod = Image.open("assets/product-sunset-stripes.jpg")

# Target canvas: 800 x 1000 (4:5 vertical)
target_w = 800
target_h = 1000

# Scale model to 800 x 800
scaled_w = 800
scaled_h = 800
scaled_prod = prod.resize((scaled_w, scaled_h), Image.Resampling.LANCZOS)
scaled_arr = np.array(scaled_prod)

# Paste at (0, 70)
model_x = 0
model_y = 70

canvas_arr = np.zeros((target_h, target_w, 3), dtype=np.float32)

# Top wall row
top_row = scaled_arr[0, :, :].mean(axis=0)

# Fill top 0..model_y
for y in range(model_y):
    canvas_arr[y, :, :] = top_row

# Fill model region
canvas_arr[model_y:model_y+scaled_h, :, :] = scaled_arr

# Bottom floor rows: extend downwards with smooth floor lighting
bottom_arr = scaled_arr[-30:, :, :].mean(axis=0)
for y in range(model_y+scaled_h, target_h):
    canvas_arr[y, :, :] = bottom_arr

# Soft smooth vertical blend at top seam (y: 55..85)
for y in range(55, 85):
    t = (y - 55) / 30.0
    canvas_arr[y, :, :] = (1 - t) * top_row + t * scaled_arr[y - model_y, :, :]

# Soft smooth vertical blend at bottom seam (y: 855..885)
for y in range(855, 885):
    t = (y - 855) / 30.0
    canvas_arr[y, :, :] = (1 - t) * scaled_arr[y - model_y, :, :] + t * bottom_arr

final_arr = np.clip(canvas_arr, 0, 255).astype(np.uint8)
final_img = Image.fromarray(final_arr)

# Save
final_img.save("assets/hero-sunset-mobile.jpg", quality=95)
print("Saved perfect assets/hero-sunset-mobile.jpg:", final_img.size)
