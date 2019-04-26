const cacheName = 'v1';

const cacheAssets = [
  'index.html',
  'about.html'
];

// Call install Event
self.addEventListener('install', (event) => {
  console.log(`Service worker Installed`);
  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache)=>{
        console.log('SW caching files');
      })
  );
});

// Call Activate Event
self.addEventListener('activate', (event) => {
  console.log(`Service worker Activated`)
});
