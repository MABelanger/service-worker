const cacheName = 'v3';

const cacheAssets = [
  'toto.js',
  'about.html'
];

// Call install Event
self.addEventListener('install', (event) => {
  console.log(`Service worker Installed`);
  // wait that sw is ready.
  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log('SW caching files');
        cache.addAll(cacheAssets);
      })
      .then(()=>{
        self.skipWaiting();
      })
  );
});

// Call Activate Event
self.addEventListener('activate', (event) => {
  console.log(`Service worker Activated`)
  // Remove unwanted caches
  event.waitUntil(
    caches.keys()
      .then((cacheNames)=>{
        return Promise.all(
          cacheNames.map((cache)=>{
            if(cache !== cacheName) {
              console.log('SW : clearing olad cache');
              return caches.delete(cache);
            }
          })
        )
      })
  )
});
