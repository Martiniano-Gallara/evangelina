with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

old_scripts = '<script src="github-sync.js"></script>\n  <script src="app.js?v=3.0"></script>'
new_scripts = '<script src="github-sync.js"></script>\n  <script src="backoffice.js?v=3.0"></script>\n  <script src="app.js?v=3.0"></script>'

if old_scripts in html:
    html = html.replace(old_scripts, new_scripts)
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print("Script tags in index.html updated successfully!")
else:
    print("Script tag sequence not found directly, checking...")
    import re
    m = re.search(r'<script src="github-sync\.js"></script>', html)
    if m:
        html = html[:m.end()] + '\n  <script src="backoffice.js?v=3.0"></script>' + html[m.end():]
        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(html)
        print("Inserted backoffice.js script tag after github-sync.js!")
    else:
        print("github-sync.js not found in index.html!")
