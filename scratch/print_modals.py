with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

modals = ['product-editor-modal', 'order-detail-modal', 'agenda-editor-modal', 'custom-order-modal', 'media-upload-modal']
for m in modals:
    start = html.find(f'id="{m}"')
    if start != -1:
        snippet = html[start:start+1800]
        ids = re.findall(r'id="([^"]+)"', snippet)
        print(f'\nModal {m}:', ids)
