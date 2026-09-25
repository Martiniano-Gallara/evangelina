import json

with open("data/products.json", "r", encoding="utf-8") as f:
    products = json.load(f)

for p in products:
    if p["id"] in ["pantalon-palazzo-animalier", "pantalon-palazzo-moca"]:
        print(f"ID: {p['id']}, Name: {p['name']}, Category: {p['category']}, Sizes: {p['sizes']}, Image: {p['image']}")
