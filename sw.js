var CACHE_NAME = 'seohasong';
var urlsToCache = [
  "/",
  "/js/main.js",
  "/favicon.ico",
];
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
