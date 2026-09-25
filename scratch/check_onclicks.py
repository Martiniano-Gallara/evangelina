with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

# Find admin section
start = html.find('id="admin-modal-overlay"')
if start != -1:
    admin_html = html[start:]
    onclicks = re.findall(r'onclick="([^"]+)"', admin_html)
    print("Found onclicks:", sorted(set(onclicks)))
