with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

start = html.find('id="admin-github-login-form"')
if start != -1:
    print(html[start-200:start+1200])
