from PIL import Image

im = Image.open("assets/hero-sunset-desktop.jpg")
print("Format:", im.format, "Size:", im.size)
# Let's save a thumbnail or check the vertical bounding of features
# Or let's see how hero-image is displayed in CSS:
# In styles.css:
# .hero-section {
#   min-height: 560px;
#   height: 68vh;
#   max-height: 740px;
#   ...
# }
# .hero-image {
#   width: 100%;
#   height: 100%;
#   object-fit: cover;
#   object-position: right center;
# }
