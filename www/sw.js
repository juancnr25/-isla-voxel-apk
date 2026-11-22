// Isla Voxel - service worker
// Cambia VERSION en cada despliegue para que los celulares bajen la versión nueva.
const VERSION = 'isla-voxel-v1';
const ARCHIVOS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './js/game.js',
  './fonts/fonts.css',
  './fonts/silkscreen-latin-400-normal.woff2',
  './fonts/silkscreen-latin-700-normal.woff2',
  './fonts/inter-latin-400-normal.woff2',
  './fonts/inter-latin-600-normal.woff2',
  './fonts/inter-latin-800-normal.woff2',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // index.html: red primero (para recibir actualizaciones), caché si no hay señal
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(r => { const copia = r.clone(); caches.open(VERSION).then(c => c.put('./index.html', copia)); return r; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }
  // resto: caché primero
  e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => {
    const copia = res.clone(); caches.open(VERSION).then(c => c.put(req, copia)); return res;
  })));
});
