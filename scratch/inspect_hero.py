import os, json

with open("app.js", "r", encoding="utf-8") as f:
    js = f.read()

print("--- app.js hero matches ---")
for line in js.splitlines():
    if "hero" in line.lower() or "title-main" in line.lower() or "tagline" in line.lower():
        print(line[:120])

if os.path.exists("data/content.json"):
    with open("data/content.json", "r", encoding="utf-8") as f:
        print("--- content.json ---")
        print(f.read())
