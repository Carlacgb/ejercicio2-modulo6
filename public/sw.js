const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
   "/",  // Raíz del sitio
    "/index.html", // Página principal
    "/main.js", // Archivo JS principal
    "/App.jsx", // Archivo JS de tu componente App principal
    "/App.css", // Archivo CSS de tu componente App principal
    "/icons/icon-192x192.png", // Icono
];
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.open(CACHE_NAME).then(cache => {
            return cache.match(event.request).then(response => {
                const fetchPromise = fetch(event.request).then(networkResponse => {
                    cache.put(event.request,
                        networkResponse.clone());
                    return networkResponse;
                });
                return response || fetchPromise;
            });
        })
    );
});