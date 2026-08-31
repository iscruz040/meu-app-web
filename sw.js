self.addEventListener('install', (event) => {
  console.log('App instalado com sucesso!');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});

