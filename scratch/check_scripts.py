with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re
scripts = re.findall(r'<script[^>]*>.*?</script>|<script[^>]*/>|<script[^>]*>', html, re.DOTALL)
print('Script tags found:')
for s in scripts:
    print(s[:150])
