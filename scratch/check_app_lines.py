with open('app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"Total lines in app.js: {len(lines)}")
for i, line in enumerate(lines):
    if "8. COMPLETE ADMIN SUITE CONTROLLER" in line:
        print(f"Admin suite starts at line: {i+1}")
    if "10. SIZE GUIDE & MEASUREMENTS CONTROLLER" in line:
        print(f"Size guide starts at line: {i+1}")
