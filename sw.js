// 版本號：每次更新內容時，改這個數字，讓使用者端快取失效並抓新版本
const CACHE_VERSION = 'v1';
const CACHE_NAME = 'tainan-fc-' + CACHE_VERSION;

const CORE_ASSETS = [
  'index.html',
  'tickets.html',
  'itinerary.html',
  'notices.html',
  'styles.css',
  'roster.js',
  'manifest.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).catch(()=>{})
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// 網路優先：有網路就抓最新版本；離線時退回快取
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(()=>{});
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
