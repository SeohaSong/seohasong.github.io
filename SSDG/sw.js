function run() {
  let file = "./sw-ssdg.js";
  navigator.serviceWorker.register(file)
                         .then(swr => console.log(file));
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", run);
}
