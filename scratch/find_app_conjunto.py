with open("app.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

for i, line in enumerate(lines[:250]):
    if "conjunto-polka-indigo" in line:
        print(f"conjunto-polka-indigo found at line {i+1}")
        for j in range(max(0, i - 2), min(len(lines), i + 35)):
            print(f"{j+1}: {lines[j].rstrip()}")
        break
