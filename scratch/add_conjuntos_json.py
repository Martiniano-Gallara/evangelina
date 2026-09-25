import json

with open("data/products.json", "r", encoding="utf-8") as f:
    products = json.load(f)

new_conjuntos = [
    {
        "id": "conjunto-seersucker-azul",
        "name": "Conjunto Seersucker Rayas Azules",
        "category": "Conjuntos",
        "price": 68000,
        "originalPrice": 76000,
        "image": "assets/product-conjunto-seersucker-azul.jpg",
        "badge": "Nuevo",
        "isNew": True,
        "isFeatured": True,
        "stock": 7,
        "active": True,
        "views": 48,
        "salesCount": 0,
        "colors": [
            { "name": "Azul Francés & Blanco", "hex": "#4A6FA5" },
            { "name": "Celeste Brisa", "hex": "#8FA9C4" }
        ],
        "sizes": ["S", "M", "L"],
        "description": "Conjunto de dos piezas confeccionado en algodón seersucker liviano a micro rayas azules y blancas. Top con volados sutiles en mangas y lazo, junto a pantalón palazzo holgado con cintura elastizada.",
        "composition": "100% Algodón textura seersucker europeo.",
        "details": [
            "Top con terminación de volados en hombros",
            "Pantalón palazzo tiro alto con elástico suave",
            "Tejido fresco y texturado ideal para media estación y verano",
            "Confeccionado artesanalmente en Buenos Aires"
        ]
    },
    {
        "id": "conjunto-blanco-puro",
        "name": "Conjunto Flare Monocromo Blanco Puro",
        "category": "Conjuntos",
        "price": 72000,
        "originalPrice": 82000,
        "image": "assets/product-conjunto-blanco-puro.jpg",
        "badge": "Exclusivo",
        "isNew": True,
        "isFeatured": True,
        "stock": 6,
        "active": True,
        "views": 56,
        "salesCount": 1,
        "colors": [
            { "name": "Blanco Puro", "hex": "#FFFFFF" },
            { "name": "Marfil Suave", "hex": "#F7F5F0" }
        ],
        "sizes": ["S", "M", "L"],
        "description": "Elegante conjunto monocromático de dos piezas en bengala de algodón elastizado blanco puro. Top crop sin mangas con cuello redondo y pantalón oxford flare tiro alto con pinzas que estilizan la silueta.",
        "composition": "97% Algodón peinado de alto gramaje, 3% Spandex.",
        "details": [
            "Top crop estructurado forrado",
            "Pantalón corte flare / oxford con caída pesada",
            "Tiro ultra alto moldeador",
            "Confección artesanal en Buenos Aires"
        ]
    },
    {
        "id": "conjunto-rayas-celeste",
        "name": "Conjunto Riviera Rayas Cielo",
        "category": "Conjuntos",
        "price": 69000,
        "originalPrice": 78000,
        "image": "assets/product-conjunto-rayas-celeste.jpg",
        "badge": "Favorito Atelier",
        "isNew": True,
        "isFeatured": True,
        "stock": 8,
        "active": True,
        "views": 60,
        "salesCount": 2,
        "colors": [
            { "name": "Celeste Cielo & Marfil", "hex": "#93B5CF" },
            { "name": "Azul Costero", "hex": "#5B7FA4" }
        ],
        "sizes": ["S", "M", "L"],
        "description": "Conjunto de dos piezas con estampa a rayas verticales en tonos celeste cielo y tiza. Top sin mangas con detalle de lazos laterales regulables y pantalón palazzo de cintura elastizada con calce holgado mediterráneo.",
        "composition": "70% Algodón puro, 30% Lino natural.",
        "details": [
            "Top corto con lazos regulables laterales",
            "Pantalón palazzo de silueta fluida",
            "Lino y algodón fresco y transpirable",
            "Confección artesanal en Buenos Aires"
        ]
    }
]

# Check if already present
existing_ids = {p["id"] for p in products}
insert_idx = 0
for i, p in enumerate(products):
    if p["id"] == "conjunto-polka-indigo":
        insert_idx = i + 1
        break

for nc in new_conjuntos:
    if nc["id"] not in existing_ids:
        products.insert(insert_idx, nc)
        insert_idx += 1

with open("data/products.json", "w", encoding="utf-8") as f:
    json.dump(products, f, indent=2, ensure_ascii=False)

print(f"Total products in data/products.json: {len(products)}")
