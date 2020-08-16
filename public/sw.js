const CACHE_NAME = 'v1';

// Call install event
this.addEventListener('install', (e) => {
    console.log('Service Worker: Installed')
})

// Call activate event
this.addEventListener('activate', (e) => {
    console.log('Service Worker: Activated');
    // Remove unwanted caches.
    e.waitUntil(
        caches.keys().then( cacheNames => {
            return Promise.all(
                cacheNames.map( cache => {
                    if ( cache !== CACHE_NAME ) {
                        // Remove all old caches.
                        return caches.delete( cache );
                    }
                    return null;
                })
            )
        })
    )
})

// Call fetch event- Caching Policy: Offline
this.addEventListener('fetch', event => {
    console.log(event.request.url)
    event.respondWith(
        caches.match(event.request)
            .then( response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
  
                return fetch(event.request)
                    .then( response => {
                        // Return the response if it is not a valid one.
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
  
                        // Clone and cache the respone if it is a valid one.
                        // and it is not the one related to API call.
                        // if (!event.request.includes('opentdb.com')) {
                            var responseToCache = response.clone();
                            caches.open(CACHE_NAME)
                                .then( cache => {
                                    cache.put(event.request, responseToCache);
                                });
                        // }
  
                        return response;
                    });
            })
    );
});
