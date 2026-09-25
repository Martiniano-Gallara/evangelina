from PIL import Image

im = Image.open("assets/hero-sunset-desktop.jpg")
# Let's inspect the pixels around x=700-800
print("Image size:", im.size)
# At x=845, there is a sharp vertical split where the image on the left has shadow lines and on the right has smooth wall
crop_seam = im.crop((700, 400, 950, 700))
crop_seam.save("scratch/seam_preview.png")
print("Saved seam preview")
