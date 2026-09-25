with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

import re
classes = re.findall(r'\.([a-zA-Z0-9_\-]+)\s*\{', css)
print('Total CSS classes in styles.css:', len(classes))
backoffice_classes = [c for c in classes if any(k in c.lower() for k in ['backoffice', 'kpi', 'panel', 'sync', 'admin', 'table', 'badge', 'modal', 'card', 'agenda', 'media', 'custom', 'cms'])]
print('Backoffice related classes count:', len(backoffice_classes))
print('Sample backoffice classes:', sorted(set(backoffice_classes))[:30])
