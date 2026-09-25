from PIL import Image, ImageFilter
import numpy as np

# Load source
prod = Image.open("assets/product-sunset-stripes.jpg")
pw, ph = prod.size

# Target mobile canvas: 800 x 1000 (aspect ratio 4:5 = 0.8)
target_w = 800
target_h = 1000

# We want the entire model from head (with headroom) to sneakers (with footroom)
# In prod (1024x1024):
# Head top is at y = 24
# Sneakers bottom is at y = 985
# Model height is 961px.
# We want model height to be ~850px in the 1000px canvas.
# Scale = 850 / 961 = 0.8845
scale = 850.0 / 961.0
sw = int(pw * scale)  # 905
sh = int(ph * scale)  # 905

scaled_prod = prod.resize((sw, sh), Image.Resampling.LANCZOS)

# Head starts at 24 * scale = 21px in scaled_prod.
# We want head to be at y = 70px in target canvas.
# So scaled_prod y_offset = 70 - 21 = 49px!
paste_y = 49
# Shoes bottom will be at: 49 + 985 * scale = 49 + 871 = 920px in target canvas!
# That leaves 80px of floor beneath her shoes! Perfect!

# Horizontally: model center is around x = 512 * scale = 452 in scaled_prod.
# We want model center to be at target_w // 2 = 400.
# So scaled_prod x_offset = 400 - 452 = -52px.
paste_x = -52

# Create background:
# Sample top wall color and bottom floor color
arr = np.array(prod)
wall_col = arr[:30, 200:800, :].mean(axis=(0,1))
floor_col = arr[-30:, 200:800, :].mean(axis=(0,1))

bg_arr = np.zeros((target_h, target_w, 3), dtype=np.float32)
horizon_y = paste_y + int(640 * scale)

for y in range(target_h):
    if y < horizon_y:
        bg_arr[y, :] = wall_col
    else:
        t = (y - horizon_y) / float(target_h - horizon_y)
        bg_arr[y, :] = (1 - t * 0.35) * wall_col + (t * 0.35) * floor_col

bg = Image.fromarray(np.clip(bg_arr, 0, 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(radius=8))

# Now create soft alpha mask for scaled_prod
mask = Image.new("L", (sw, sh), 255)
mask_arr = np.full((sh, sw), 255, dtype=np.uint8)

# Top fade (20px)
for y in range(25):
    mask_arr[y, :] = int(255 * (y / 25.0))
# Bottom fade (25px)
for y in range(30):
    mask_arr[sh - 1 - y, :] = int(255 * (y / 30.0))
# Left fade (25px)
for x in range(25):
    mask_arr[:, x] = np.minimum(mask_arr[:, x], int(255 * (x / 25.0)))
# Right fade (25px)
for x in range(25):
    mask_arr[:, sw - 1 - x] = np.minimum(mask_arr[:, sw - 1 - x], int(255 * (x / 25.0)))

mask = Image.fromarray(mask_arr, mode="L")

# Paste
bg.paste(scaled_prod, (paste_x, paste_y), mask)

# Save
bg.save("assets/hero-sunset-mobile.jpg", quality=95)
print("Saved perfect assets/hero-sunset-mobile.jpg (800x1000)!")
