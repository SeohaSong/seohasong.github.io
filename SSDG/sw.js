function run() {
  navigator.serviceWorker
  .register("/sw-ssdg.js")
  .then(swr => console.log(swr.waiting.scriptURL));
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", run);
}
