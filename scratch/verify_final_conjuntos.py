import json

with open("data/products.json", "r", encoding="utf-8") as f:
    products = json.load(f)

conjuntos = [p for p in products if p["category"] == "Conjuntos"]
print(f"Total Conjuntos in catalog: {len(conjuntos)}")
for c in conjuntos:
    print(f"- {c['name']} (${c['price']}) -> Image: {c['image']} | Sizes: {c['sizes']}")
