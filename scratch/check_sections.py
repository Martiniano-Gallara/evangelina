from bs4 import BeautifulSoup

with open('index.html', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

main = soup.find('main')
for i, child in enumerate(main.children):
    if child.name:
        h1 = child.find('h1')
        h2 = child.find('h2')
        title = (h1.get_text(strip=True) if h1 else '') or (h2.get_text(strip=True) if h2 else '')
        sub = child.find(class_='section-sub')
        sub_text = sub.get_text(strip=True) if sub else ''
        print(f'{i}: <{child.name} id="{child.get("id")}" class="{child.get("class")}"> | sub: {sub_text} | title: {title}')
