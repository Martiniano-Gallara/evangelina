import os, glob

for pattern in ["*.html", "*.js", "data/*.json"]:
    for fpath in glob.glob(pattern):
        try:
            with open(fpath, "r", encoding="utf-8") as f:
                content = f.read()
            if "Sofía" in content or "Martina" in content or "Hermanas" in content:
                print(f"Match in {fpath}:")
                for i, line in enumerate(content.splitlines()):
                    if any(k in line for k in ["Sofía", "Martina", "Hermanas"]):
                        print(f"  {i+1}: {line.strip()}")
        except Exception as e:
            pass
