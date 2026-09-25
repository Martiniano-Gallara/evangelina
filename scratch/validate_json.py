import json

# Verify JSON files
for path in ["data/products.json", "data/content.json", "data/atelier_config.json"]:
    try:
        with open(path, "r", encoding="utf-8") as f:
            json.load(f)
        print(f"OK: {path}")
    except Exception as e:
        print(f"ERROR: {path}: {e}")

print("All JSON files verified.")
