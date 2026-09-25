with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

import re

# Find all @media queries
media_queries = re.findall(r"@media[^{]+\{", css)
print("Found media queries:")
for mq in set(media_queries):
    print(mq.strip())
