const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

// Precache all files specified in the manifest generated by Webpack
precacheAndRoute(self.__WB_MANIFEST);

// Cache the HTML pages with a CacheFirst strategy
const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    // Cache responses with status 0 (opaque) and 200 (OK)
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    // Expire cache entries after 30 days
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

// Warm up the cache by preloading important pages like index.html
warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

// Cache all navigation (HTML) requests with the CacheFirst strategy
registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// Implement asset caching for styles, scripts, and images
registerRoute(
  // Match requests for CSS, JavaScript, and image files
  ({ request }) => ['style', 'script', 'image'].includes(request.destination),
  
  // Use CacheFirst strategy to cache these assets
  new CacheFirst({
    cacheName: 'asset-cache',
    plugins: [
      // Cache responses with status 0 (opaque) and 200 (OK)
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      // Limit cache to 60 entries, and expire them after 30 days
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
        maxEntries: 60,
      }),
    ],
  })
);
