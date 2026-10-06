import os
from urllib.request import urlopen, Request

base_dir = r"C:\Users\intel\Desktop\Stackly-Pro\juice-mall\public\images"
os.makedirs(base_dir, exist_ok=True)

items = {
    "Watermelon-Juice.jpg": "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?auto=format&fit=crop&w=900&q=80",
    "Pineapple-Juice.jpg": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2e6?auto=format&fit=crop&w=900&q=80",
    "Mango-Passion-Blend.jpg": "https://images.unsplash.com/photo-1553530666-ba11a7da7f4f?auto=format&fit=crop&w=900&q=80",
    "Dragon-Fruit-Juice.jpg": "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=900&q=80",
    "Fresh-Orange.jpg": "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=900&q=80",
    "Sweet-Lime-juice.jpg": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=900&q=80",
    "Strawberry-Banana-Smoothie.jpg": "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=80",
    "Apple-Kiwi-Fusion.jpg": "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=80",
    "Strawberry-Smoothie.jpg": "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=900&q=80",
    "Beetroot Detox.jpg": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
    "Apple Cucumber Detox.jpg": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
    "Carrot Ginger Detox.jpg": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
}

for name, url in items.items():
    path = os.path.join(base_dir, name)
    if os.path.exists(path):
        print(f"already exists: {name}")
        continue

    request = Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urlopen(request, timeout=30) as response:
        data = response.read()

    with open(path, "wb") as f:
        f.write(data)
    print(f"saved: {name}")

print("done")
