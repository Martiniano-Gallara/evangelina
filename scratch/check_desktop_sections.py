with open("styles.css", "r", encoding="utf-8") as f:
    lines = f.readlines()

def print_section(title, start_str, n_lines=40):
    for i, line in enumerate(lines):
        if start_str in line:
            print(f"=== {title} (Line {i+1}) ===")
            for j in range(i, min(len(lines), i + n_lines)):
                print(lines[j].rstrip())
            print()
            break

print_section("Product Grid", ".products-grid {")
print_section("Categories Grid", ".categories-grid {")
print_section("Story Section", ".story-section {")
print_section("Pillars", ".pillars-grid {")
