/* Kids Adventure World Service Worker - V2.0 Premium */
const CACHE_VERSION = "kids-adventure-world-v2.0-premium";
const APP_SHELL = [
  "./",
  "./index.html",
  "./game.html",
  "./manifest.json",
  "./data/question-bank.json",
  "./admin/control-panel.html",
  "./assets/icons/icon.svg",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((key) => key !== CACHE_VERSION ? caches.delete(key) : null)))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.pathname.endsWith("/data/question-bank.json")) {
    event.respondWith(fetch(request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
      return response;
    }).catch(() => caches.match(request)));
    return;
  }
  event.respondWith(caches.match(request).then((cached) => cached || fetch(request).then((response) => {
    const copy = response.clone();
    caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
    return response;
  }).catch(() => request.mode === "navigate" ? caches.match("./game.html") : undefined)));
});
