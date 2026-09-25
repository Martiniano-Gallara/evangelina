from PIL import Image, ImageFilter
import numpy as np

# Load source image
prod = Image.open("assets/product-sunset-stripes.jpg")
pw, ph = prod.size

# Target canvas: 1920 x 1080
canvas_w, canvas_h = 1920, 1080

# We want the model to look natural and well-framed
# Height: 980px, placed at y=60, so bottom is at 1040, top is at 60 (60px of headroom)
target_h = 980
scale = target_h / ph
target_w = int(pw * scale)  # ~980px

scaled_prod = prod.resize((target_w, target_h), Image.Resampling.LANCZOS)

# Create canvas
canvas = Image.new("RGB", (canvas_w, canvas_h), (207, 192, 178))

# Model placed on the right
model_x = canvas_w - target_w - 50 # 1920 - 980 - 50 = 890
model_y = 60

# Let's inspect the background of scaled_prod
# The left strip of scaled_prod from x=0 to x=280 is pure wall and floor
# Let's create a seamless blend from model_x to the left edge!
# Left strip of scaled_prod
strip_w = 260
strip = scaled_prod.crop((0, 0, strip_w, target_h))

# In the strip:
# Wall top is roughly y=0 to y=620 (warm beige wall)
# Floor is roughly y=620 to y=980 (warm floor with light)
# We can extend the background to the left by interpolating/blending or mirroring the strip smoothly
bg_canvas = Image.new("RGB", (canvas_w, canvas_h))

# Fill background with a natural vertical gradient matching the wall and floor
# Top wall color: [207, 192, 178]
# Horizon line at y ≈ 620 + model_y = 680
# Floor color: [232, 219, 208]
wall_color = np.array([208, 193, 179], dtype=float)
horizon_color = np.array([204, 189, 175], dtype=float)
floor_color = np.array([233, 220, 209], dtype=float)

bg_arr = np.zeros((canvas_h, canvas_w, 3), dtype=np.uint8)
horizon_y = model_y + int(640 * scale)

for y in range(canvas_h):
    if y < horizon_y:
        t = y / max(1, horizon_y)
        col = (1 - t) * wall_color + t * horizon_color
    else:
        t = (y - horizon_y) / max(1, canvas_h - horizon_y)
        col = (1 - t) * horizon_color + t * floor_color
    bg_arr[y, :] = np.clip(col, 0, 255).astype(np.uint8)

bg_img = Image.fromarray(bg_arr)

# Also let's replicate the soft window blinds shadow on the left wall to give it luxury architectural depth!
# Soft diagonal/horizontal shadow bars on the left
shadow_overlay = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
shadow_arr = np.zeros((canvas_h, canvas_w, 4), dtype=np.uint8)

# Blinds shadows between y=650 and y=1050, from x=0 to x=850
for y in range(650, 1050):
    for x in range(0, 950):
        # subtle shadow bands
        band = np.sin((y * 1.5 - x * 0.3) * 0.05)
        if band > 0.2:
            # soft shadow
            fade_x = max(0, 1 - (x / 900.0))
            fade_y = np.sin((y - 650) / 400.0 * np.pi)
            alpha = int(22 * fade_x * fade_y * (band - 0.2) / 0.8)
            shadow_arr[y, x] = [50, 40, 30, alpha]

shadow_img = Image.fromarray(shadow_arr, mode="RGBA")
bg_img = Image.alpha_composite(bg_img.convert("RGBA"), shadow_img).convert("RGB")

# Now paste scaled_prod with a soft alpha gradient on its left edge (from x=0 to x=200 of scaled_prod)
# so there is ZERO visible seam!
alpha_mask = Image.new("L", (target_w, target_h), 255)
mask_arr = np.full((target_h, target_w), 255, dtype=np.uint8)

# Soft linear ramp on the left edge for seamless blend
ramp_w = 180
for x in range(ramp_w):
    val = int(255 * (x / ramp_w))
    mask_arr[:, x] = val

# Also soft blend on top and bottom edges (just 15px)
for y in range(25):
    val = int(255 * (y / 25))
    mask_arr[y, :] = np.minimum(mask_arr[y, :], val)
for y in range(25):
    val = int(255 * (y / 25))
    mask_arr[target_h - 1 - y, :] = np.minimum(mask_arr[target_h - 1 - y, :], val)

alpha_mask = Image.fromarray(mask_arr, mode="L")

# Composite model onto background
bg_img.paste(scaled_prod, (model_x, model_y), alpha_mask)

# Save as test preview
bg_img.save("scratch/test_hero_desktop.jpg", quality=95)
print("Saved scratch/test_hero_desktop.jpg")
