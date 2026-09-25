import json

with open("data/products.json", "r", encoding="utf-8") as f:
    products = json.load(f)

for i, p in enumerate(products):
    if p["id"] == "conjunto-polka-indigo":
        print(f"conjunto-polka-indigo found at index {i}")
