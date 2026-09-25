from PIL import Image
import numpy as np

prod = Image.open("assets/product-sunset-stripes.jpg")
w, h = prod.size
print(f"Product size: {w}x{h}")

# Find model bounding box roughly
# Hair top is around y=24
# Shoe bottom is around y=985
# Leftmost hand is around x=325
# Rightmost elbow is around x=680
# Canvas target for mobile: 800 width x 1120 height (Ratio 1:1.4 ~ 5:7)
# Let's scale model so height is 920px (920px tall)
# Top y = 70px (70px headroom above hair!)
# Bottom y = 70 + 920 = 990px (130px floor room below sneakers!)
# Left x = (800 - 920) // 2 ... wait, pw is 1024, so scaled width is 920.
# If canvas width is 768, and scaled model is 768 wide, height is 768. 
# But model is vertical!
