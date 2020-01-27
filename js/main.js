const main = () => {
  if (!("serviceWorker" in navigator)) return;
  const run = () => {
    navigator.serviceWorker
    .register("/sw.js")
    .then(() => console.log("Success."))
    .catch(error => console.log(error));
  }
  window.addEventListener("load", run);
}
main();
