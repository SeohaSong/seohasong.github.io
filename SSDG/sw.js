function run() {
  navigator.serviceWorker.register("./sw-ssdg.js")
                         .then(swr => console.log(file));
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", run);
}
