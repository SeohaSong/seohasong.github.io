function run() {
  const base = document.getElementsByTagName('base')[0].getAttribute("href");
  let file = base + "sw-ssdg.js";
  navigator.serviceWorker.register(file)
                         .then(swr => console.log(file));
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", run);
}
