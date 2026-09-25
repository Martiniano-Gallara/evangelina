with open("app.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if "quick-view" in line.lower() or "openquickview" in line.lower():
        start = max(0, i - 2)
        end = min(len(lines), i + 45)
        print(f"=== Match at line {i+1} ===")
        for j in range(start, end):
            print(f"{j+1}: {lines[j].rstrip()}")
        print()
