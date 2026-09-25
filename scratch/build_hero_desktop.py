from PIL import Image, ImageFilter
import numpy as np

# Load source
prod = Image.open("assets/product-sunset-stripes.jpg")
pw, ph = prod.size
print(f"Product image: {pw}x{ph}")

# Canvas: 1920 x 1080
canvas_w, canvas_h = 1920, 1080

# We want the model to be positioned on the right side of the canvas.
# Model height in canvas: let's say 1020px (so headroom of ~60px).
target_h = 1030
scale = target_h / ph
target_w = int(pw * scale)

scaled_prod = prod.resize((target_w, target_h), Image.Resampling.LANCZOS)
print(f"Scaled model: {target_w}x{target_h}")

# Background color sampling from the top-left of the model image
wall_sample = np.array(prod.crop((0, 0, 100, 100))).mean(axis=(0,1))
floor_sample = np.array(prod.crop((0, 800, 100, 950))).mean(axis=(0,1))
print("Wall sample RGB:", wall_sample)
print("Floor sample RGB:", floor_sample)
