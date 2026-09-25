with open("app.js", "r", encoding="utf-8") as f:
    js = f.read()

for i, line in enumerate(js.splitlines()):
    if "localstorage" in line.lower() or "fetch(" in line.lower() or "getproducts" in line.lower():
        print(f"app.js:{i+1}: {line}")

with open("backoffice.js", "r", encoding="utf-8") as f:
    bo = f.read()

for i, line in enumerate(bo.splitlines()[:150]):
    if "products" in line.lower():
        print(f"backoffice.js:{i+1}: {line}")
