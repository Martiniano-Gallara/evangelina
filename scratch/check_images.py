import os
from PIL import Image

for name in ["assets/hero-sunset-desktop.jpg", "assets/hero-sunset-mobile.jpg", "assets/product-sunset-stripes.jpg"]:
    if os.path.exists(name):
        im = Image.open(name)
        print(f"{name}: size={im.size}, mode={im.mode}")
