const V='pixel-tribe-v2',F=['./','index.html','manifest.json','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!=V).map(n=>caches.delete(n)))));self.clients.claim()});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
