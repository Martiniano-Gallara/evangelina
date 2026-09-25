from PIL import Image

im = Image.open("assets/hero-sunset-desktop.jpg")
w, h = im.size
print(f"Image size: {w}x{h}")
# The model's head is near the top edge!
# If container height is less than (container_width * 1080 / 1920), 
# object-fit: cover with center vertical alignment chops off the top!
