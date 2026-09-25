from PIL import Image
import numpy as np

prod = Image.open("assets/product-sunset-stripes.jpg")

target_w = 800
target_h = 1000

# Scale model to 800 x 800
scaled_w = 800
scaled_h = 800
scaled_prod = prod.resize((scaled_w, scaled_h), Image.Resampling.LANCZOS)

# Create background canvas 800 x 1000
top_wall_col = tuple(np.array(prod.crop((100, 0, 900, 30))).mean(axis=(0,1)).astype(int))
floor_col = tuple(np.array(prod.crop((100, 990, 900, 1024))).mean(axis=(0,1)).astype(int))

canvas = Image.new("RGB", (target_w, target_h), top_wall_col)

# Paste scaled_prod at (0, 70)
model_y = 70

# Smooth alpha mask for scaled_prod
mask = Image.new("L", (scaled_w, scaled_h), 255)
mask_arr = np.full((scaled_h, scaled_w), 255, dtype=np.uint8)

# Top 20px
for y in range(25):
    mask_arr[y, :] = int(255 * (y / 25.0))
# Bottom 20px
for y in range(25):
    mask_arr[scaled_h - 1 - y, :] = int(255 * (y / 25.0))

mask = Image.fromarray(mask_arr, mode="L")

# Create floor gradient for the bottom part of canvas (from y=800 to 1000)
canvas_arr = np.array(canvas)
horizon_y = model_y + 500  # 570
for y in range(horizon_y, target_h):
    t = (y - horizon_y) / float(target_h - horizon_y)
    canvas_arr[y, :] = ((1 - t * 0.4) * np.array(top_wall_col) + (t * 0.4) * np.array(floor_col)).astype(np.uint8)

canvas = Image.fromarray(canvas_arr)
canvas.paste(scaled_prod, (0, model_y), mask)

canvas.save("assets/hero-sunset-mobile.jpg", quality=95)
print("Saved assets/hero-sunset-mobile.jpg successfully!")
