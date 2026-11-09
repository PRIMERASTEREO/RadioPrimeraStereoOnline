const CACHE_NAME = 'primera-stereo-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  if (
    event.request.url.includes('laut.fm') ||
    event.request.url.includes('googleapis.com') ||
    event.request.url.includes('://apple.com') ||
    event.request.url.includes('optistats.ovh')
  ) {
    return;
  }

  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
