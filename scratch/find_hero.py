with open("styles.css", "r", encoding="utf-8") as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if "hero" in line.lower():
        start = max(0, i - 2)
        end = min(len(lines), i + 8)
        print(f"--- Line {i+1} ---")
        for j in range(start, end):
            print(f"{j+1}: {lines[j].rstrip()}")
        print()
