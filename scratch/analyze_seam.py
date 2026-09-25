from PIL import Image
import numpy as np

im = Image.open("assets/hero-sunset-desktop.jpg")
arr = np.array(im)
print("Shape:", arr.shape)
# Inspect average colors around x=845
left_col = arr[:, 840, :].mean(axis=0)
right_col = arr[:, 850, :].mean(axis=0)
print("Color left of 845:", left_col)
print("Color right of 845:", right_col)

# Let's inspect where product-sunset-stripes was placed
orig = Image.open("assets/product-sunset-stripes.jpg")
print("Original product size:", orig.size)
