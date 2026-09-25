from PIL import Image
import numpy as np

im = Image.open("scratch/test_hero_mobile.jpg")
arr = np.array(im)
print("Top 10 rows mean color:", arr[:10, :, :].mean(axis=(0,1)))
print("Row 80 mean color:", arr[80, :, :].mean(axis=(0,1)))
print("Bottom 10 rows mean color:", arr[-10:, :, :].mean(axis=(0,1)))
print("Row 900 mean color:", arr[900, :, :].mean(axis=(0,1)))
