function cacheFiles(event) {

  let files = [
    "assets/icon/favicon.png",
    "assets/icon/icon.png",
    "assets/shapes.svg",
    "native.js",
    "native.wasm",
    "sw.js",
    "sw-ssdg.js"
  ];

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
