import json

with open("data/products.json", "r", encoding="utf-8") as f:
    products = json.load(f)

print("Existing Conjuntos:")
for p in products:
    if p["category"] == "Conjuntos":
        print(f"ID: {p['id']}, Name: {p['name']}, Price: {p['price']}, Sizes: {p['sizes']}, Colors: {[c['name'] for c in p['colors']]}")
