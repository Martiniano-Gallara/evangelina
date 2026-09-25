import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

modals = re.findall(r'<div [^>]*id="([^"]*modal[^"]*)"', content, re.IGNORECASE)
print('Modals found:', modals)

backoffice_ids = re.findall(r'id="([a-zA-Z0-9_\-]+)"', content)
backoffice_ids = [i for i in backoffice_ids if any(k in i.lower() for k in ['admin', 'kpi', 'prod', 'order', 'agenda', 'custom', 'media', 'cms', 'gh-'])]
print(f'Total key IDs found: {len(backoffice_ids)}')
print(sorted(set(backoffice_ids)))
