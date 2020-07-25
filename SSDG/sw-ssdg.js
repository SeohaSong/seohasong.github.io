let files = [
  "index.html",
  "menifest.json",
  "native.js",
  "native.wasm",
  "sw.js",
  "sw-ssdg.js",
  "assets/shapes.svg",
  "assets/icon/favicon.png",
  "assets/icon/icon.png"
];

function cacheFiles(event) {
  event.waitUntil(
    caches.open("ssdg").then(function(cache) {
      console.log('caching...');
      files.forEach(val => {
        console.log("\t", val);
        cache.add(val);
      })
      console.log("finish to save ssdg assets.");
    })
  );
}

self.addEventListener('install', cacheFiles);
