for filename in ["app.js", "backoffice.js", "github-sync.js"]:
    try:
        with open(filename, "r", encoding="utf-8") as f:
            code = f.read()
        print(f"=== {filename} ===")
        for i, line in enumerate(code.splitlines()):
            if any(k in line.lower() for k in ["hero", "title-main", "tagline", "sunset"]):
                print(f"{i+1}: {line[:120]}")
    except Exception as e:
        print(e)
