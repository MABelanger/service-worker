if(navigator.serviceWorker) {
  console.log('sw supported');
  window.addEventListener('load', () => {
    console.log('load')
    navigator.serviceWorker
      .register('./sw_cached_pages.js')
      .then((reg) => {
        console.log('SW registered');
      })
      .catch((err) => {
        console.log(`SW Error: ${err}`);
      });
  });
}
