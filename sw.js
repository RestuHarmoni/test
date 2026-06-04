/* Standby Product Service Worker - Play Games + Trace & Learn + Worksheet Games Menu */
const CACHE_VERSION = "standby-product-v1.2.5-three-menu";
const APP_SHELL = [
  "./",
  "./game.html",
  "./manifest.json",
  "./data/question-bank.json",
  "./assets/icons/icon.svg",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => {
        if (key !== CACHE_VERSION) return caches.delete(key);
      }))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Network-first untuk JSON supaya Admin Panel update cepat masuk.
  if (url.pathname.endsWith("/data/question-bank.json")) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Cache-first untuk HTML, icon, CSS/JS inline dan asset.
  event.respondWith(
    caches.match(request).then((cached) => {
      return cached || fetch(request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
        return response;
      }).catch(() => {
        if (request.mode === "navigate") return caches.match("./game.html");
      });
    })
  );
});
