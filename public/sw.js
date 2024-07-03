// public/sw.js
self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('v1').then(cache => {
        return cache.addAll([
          '/',
          '/videosobre.webm',
          '/TEXTURES/lol.glb',
          '/TEXTURES/ufo4.glb',
          // Agrega otros recursos que quieres cachear
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });