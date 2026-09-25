with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

# Find admin-modal-card contents
start = html.find('id="admin-dashboard-view"')
if start != -1:
    print(html[start:start+4000])
