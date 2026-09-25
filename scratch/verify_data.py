import json

# Let's inspect default data so backoffice.js can embed the exact fallback data
with open('data/products.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

with open('data/orders.json', 'r', encoding='utf-8') as f:
    orders = json.load(f)

with open('data/agenda.json', 'r', encoding='utf-8') as f:
    agenda = json.load(f)

with open('data/custom_orders.json', 'r', encoding='utf-8') as f:
    custom_orders = json.load(f)

with open('data/content.json', 'r', encoding='utf-8') as f:
    content = json.load(f)

with open('data/atelier_config.json', 'r', encoding='utf-8') as f:
    config = json.load(f)

with open('data/analytics.json', 'r', encoding='utf-8') as f:
    analytics = json.load(f)

print(f"Products: {len(products)}, Orders: {len(orders)}, Agenda: {len(agenda)}, Custom: {len(custom_orders)}")
