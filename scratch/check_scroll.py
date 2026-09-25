with open("app.js", "r", encoding="utf-8") as f:
    js = f.read()

for i, line in enumerate(js.splitlines()):
    if "scroll" in line.lower() or "header" in line.lower():
        print(f"{i+1}: {line}")
