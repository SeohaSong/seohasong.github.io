importScripts("./service-worker.js")
const cacheName = 'ssdg';
const offlinePage = '.';
const files = [
	"./assets/icon/avatar.png",
	"./assets/icon/bag.png",
	"./assets/icon/camera.png",
	"./assets/icon/favicon.png",
	"./assets/icon/feed.png",
	"./assets/icon/heart.png",
	"./assets/icon/main.png",
	"./assets/icon/profile.png",
	"./assets/icon/search.png",
	"./assets/img/sample.png",
	"./assets/img/sample2.png",
	"./assets/native/main.js",
	"./assets/native/main.wasm",
	"./assets/sw/main.js"
];
const targetUrls = [/\/assets\//];


self.addEventListener('install', function(e)
{
	console.log('SuperPWA service worker installation');
	e.waitUntil(
		caches.open(cacheName).then(function(cache)
		{
			console.log('SuperPWA service worker caching dependencies');
			files.map(function(url)
			{
				return cache.add(url).catch(function (reason)
				{
					return console.log('SuperPWA: ' + String(reason) + ' ' + url);
				});
			});
		})
	);
});


self.addEventListener('activate', function(e) {
	console.log('SuperPWA service worker activation');
	e.waitUntil(null);
	// e.waitUntil(
	// 	caches.keys().then(function(keyList) {
	// 		return Promise.all(keyList.map(function(key) {
	// 			if ( key !== cacheName ) {
	// 				console.log('SuperPWA old cache removed', key);
	// 				return caches.delete(key);
	// 			}
	// 		}));
	// 	})
	// );
	return self.clients.claim();
});


self.addEventListener('fetch', function(e) {
	
	if (!targetUrls.every(url => e.request.url.match(url)))
		return;
	
	// Return if request url protocal isn't http or https
	if ( ! e.request.url.match(/^(http|https):\/\//i) )
		return;
	
	// Return if request url is from an external domain.
	if ( new URL(e.request.url).origin !== location.origin )
		return;
	
	// For POST requests, do not use the cache. Serve offline page if offline.
	if ( e.request.method !== 'GET' ) {
		e.respondWith(
			fetch(e.request).catch(function(){
				return caches.match(offlinePage);
			})
		);
		return;
	}
	
	// Revving strategy
	if ( e.request.mode === 'navigate' && navigator.onLine ) {
		e.respondWith(
			fetch(e.request).then(function(response) {
				return caches.open(cacheName).then(function(cache) {
					cache.put(e.request, response.clone());
					return response;
				});  
			})
		);
		return;
	}

	e.respondWith(
		caches.match(e.request).then(function(response) {
			return response || fetch(e.request).then(function(response) {
				return caches.open(cacheName).then(function(cache) {
					cache.put(e.request, response.clone());
					return response;
				});  
			});
		}).catch(function() {
			return caches.match(offlinePage);
		})
	);
});
