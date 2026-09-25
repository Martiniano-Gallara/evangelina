from PIL import Image
import numpy as np

im = Image.open("scratch/test_hero_mobile.jpg")
arr = np.array(im)
# Find any row where min is 0 or very dark
for y in range(arr.shape[0]):
    row = arr[y, :, :]
    if row.mean() < 80:
        print(f"Row {y} is dark! mean={row.mean()}")
