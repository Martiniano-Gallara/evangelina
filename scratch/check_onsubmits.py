with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re
onsubmits = re.findall(r'onsubmit="([^"]+)"', html)
print("Found onsubmits:", sorted(set(onsubmits)))
