from PIL import Image, ImageFilter
import numpy as np

# Load source image
prod = Image.open("assets/product-sunset-stripes.jpg")
pw, ph = prod.size

# Target canvas: 1920 x 1080
canvas_w, canvas_h = 1920, 1080

# Target model size: 980px tall, positioned on the right
target_h = 980
scale = target_h / ph
target_w = int(pw * scale)

scaled_prod = prod.resize((target_w, target_h), Image.Resampling.LANCZOS)

# Position model
model_x = canvas_w - target_w - 60  # 1920 - 980 - 60 = 880
model_y = 60

# Let's inspect the exact colors of scaled_prod along its left column
# for smooth matching
left_strip = np.array(scaled_prod)[:, :30, :] # shape (980, 30, 3)
left_col_profile = left_strip.mean(axis=1)    # shape (980, 3)

# Create background array
bg_arr = np.zeros((canvas_h, canvas_w, 3), dtype=np.float32)

# Top wall (above model_y)
top_wall_color = left_col_profile[0]
for y in range(model_y):
    bg_arr[y, :] = top_wall_color

# Model height zone
for y in range(target_h):
    canvas_y = model_y + y
    col = left_col_profile[y]
    bg_arr[canvas_y, :] = col

# Bottom zone (below model)
bottom_floor_color = left_col_profile[-1]
for y in range(model_y + target_h, canvas_h):
    bg_arr[y, :] = bottom_floor_color

# Now add soft luxury studio lighting gradient:
# Subtle warm sunlight coming from top-right / window
y_coords, x_coords = np.mgrid[0:canvas_h, 0:canvas_w]

# Convert to uint8 Image
bg_img = Image.fromarray(np.clip(bg_arr, 0, 255).astype(np.uint8))
# Slight horizontal blur to make the background perfectly smooth
bg_img = bg_img.filter(ImageFilter.GaussianBlur(radius=8))

# Subtle floor blinds shadow to give depth to the atelier floor
shadow_arr = np.zeros((canvas_h, canvas_w, 4), dtype=np.uint8)
horizon_y = model_y + int(640 * scale)

for y in range(horizon_y - 20, canvas_h):
    for x in range(0, model_x + 100):
        # Angle of blinds shadow
        phase = (y * 1.8 - x * 0.45) * 0.04
        band = np.sin(phase)
        if band > 0.3:
            fade_x = max(0.0, 1.0 - (x / (model_x + 80)))
            fade_y = min(1.0, (y - (horizon_y - 20)) / 150.0)
            alpha = int(14 * fade_x * fade_y * (band - 0.3) / 0.7)
            shadow_arr[y, x] = [45, 35, 25, alpha]

shadow_img = Image.fromarray(shadow_arr, mode="RGBA")
bg_img = Image.alpha_composite(bg_img.convert("RGBA"), shadow_img).convert("RGB")

# Alpha mask for model blending
alpha_mask = Image.new("L", (target_w, target_h), 255)
mask_arr = np.full((target_h, target_w), 255, dtype=np.uint8)

# Smooth cosine ramp on left edge
ramp_w = 200
for x in range(ramp_w):
    val = int(255 * (0.5 - 0.5 * np.cos(np.pi * x / ramp_w)))
    mask_arr[:, x] = val

# Soft edges on top and bottom (20px)
for y in range(25):
    val = int(255 * (y / 25))
    mask_arr[y, :] = np.minimum(mask_arr[y, :], val)
for y in range(25):
    val = int(255 * (y / 25))
    mask_arr[target_h - 1 - y, :] = np.minimum(mask_arr[target_h - 1 - y, :], val)

alpha_mask = Image.fromarray(mask_arr, mode="L")

# Paste scaled model
bg_img.paste(scaled_prod, (model_x, model_y), alpha_mask)

# Save both to test and overwrite assets/hero-sunset-desktop.jpg
bg_img.save("scratch/test_hero_desktop_v2.jpg", quality=95)
bg_img.save("assets/hero-sunset-desktop.jpg", quality=95)
print("Successfully generated assets/hero-sunset-desktop.jpg!")
