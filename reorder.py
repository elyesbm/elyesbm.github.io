import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

def replacer(match):
    tag = match.group(1)
    name = match.group(2)
    info = match.group(3)
    price = match.group(4)
    # The new layout: name, info, price, tag
    return f'{name}\n                    {info}\n                    {price}\n                    {tag}'

pattern = re.compile(r'(<span class="excursion-tag"[^>]*>.*?</span>)\s*(<h3 class="destination-name"[^>]*>.*?</h3>)\s*(<p class="destination-info"[^>]*>.*?</p>)\s*(<div class="destination-price"[^>]*>.*?</div>)')

new_content = pattern.sub(replacer, content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)
