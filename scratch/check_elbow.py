from PIL import Image

prod = Image.open("assets/product-sunset-stripes.jpg")
# Where does the model begin from the left?
# In product-sunset-stripes.jpg:
# Left arm / elbow is on the left side:
# The model's elbow on her left hip (viewer's left) sticks out to around x=320.
# So from x=0 to x=300 is pure background (wall on top, floor on bottom with shadow lines)!
print("Left side 0 to 300 is background!")
