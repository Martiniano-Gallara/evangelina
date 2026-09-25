with open("index.html", "r", encoding="utf-8") as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if "quick-view" in line.lower() or "modal-product" in line.lower() or "quickview" in line.lower():
        start = max(0, i - 5)
        end = min(len(lines), i + 25)
        print(f"=== Line {i+1} ===")
        for j in range(start, end):
            print(f"{j+1}: {lines[j].rstrip()}")
        print()
        break
