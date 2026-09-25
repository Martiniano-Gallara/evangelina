with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

panels = re.findall(r'<section id="(panel-[^"]+)"[^>]*>([\s\S]*?)(?=<section id="panel-|</main>)', html)
print(f'Total panels found: {len(panels)}')
for pid, pcontent in panels:
    print(f'\n--- {pid} ---')
    ids = re.findall(r'id="([^"]+)"', pcontent)
    print('IDs in panel:', ids)
