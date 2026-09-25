from PIL import Image

im = Image.open("assets/product-sunset-stripes.jpg")
print("product-sunset-stripes size:", im.size)
# Where is her head?
# Let's crop her top part
crop_head = im.crop((400, 0, 700, 250))
print("Head crop:", crop_head.size)
