// Hybrid Athlete System - Service Worker (offline cache)
const CACHE_NAME = "piq-cache-v47-20260201-71d56cb74b";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});



self.addEventListener('fetch', (event) => {
  const req = event.request;
  if(!req || req.method !== 'GET') return;
  const url = new URL(req.url);
  if(url.origin !== location.origin) return; // same-origin only
  event.respondWith((async ()=>{
    const cache = await caches.open(CACHE_NAME);
    // Exact match (includes ?v=)
    const exact = await cache.match(req);
    if(exact) return exact;

    // Try without query (handles cache busting)
    const noq = await cache.match(url.pathname);
    if(noq) return noq;

    try {
      const net = await fetch(req);
      // Cache successful responses
      if(net && net.ok) {
        cache.put(req, net.clone());
        // also store queryless version for convenience
        cache.put(url.pathname, net.clone()).catch(()=>{});
      }
      return net;
    } catch(e) {
      // Offline fallback: try cached index for navigation requests
      if(req.mode === 'navigate') {
        const cachedIndex = await cache.match('./') || await cache.match('/');
        if(cachedIndex) return cachedIndex;
      }
      // last resort: return a simple offline response
      return new Response('Offline', { status: 503, headers: { 'Content-Type':'text/plain' } });
    }
  })());
});
