# Service serviceWorker

## About
- They can't access DOM
- Programmable network proxy
- Require HTTPS unless on localhost
- Terminated when not being used.


## used for
- Push notification.
- act like proxy
- Caching assets & API calls
- Background data sync/preload


## Life cycle & Events
Register -> Install -> Activate

## Check if exist
```js
if(navigator.serviceWorker) {
  console.log('serviceWorker supported');
}
```

## To register SW
We have to register it when window load

## With chrome
go to Application -> ServiceWorker -> Update on reload
go to Console -> preserve console.log()

## Install Event & Activate
```js
self.addEventListener('install' (event) => {
  console.log(`Service worker Installed`)
})
self.addEventListener('activate', (event) => {
  console.log(`Service worker Activated`)
});
```

## Cache storage
Can access without internet.
- Can individual cache file.
- Cache all network.
