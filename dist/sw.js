importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/183837991658dcac9871.js",
    "revision": "e2e787b854d99c3ac2cbd0cce5333844"
  },
  {
    "url": "/_nuxt/2be667a82c74c8dfe8df.js",
    "revision": "891674702e060678548478ef87d06184"
  },
  {
    "url": "/_nuxt/346554e5fb74f2b9b506.js",
    "revision": "de95c1b9ba62b8f520f8d3fd92588dbc"
  },
  {
    "url": "/_nuxt/47b0853a47ad64cf7f22.js",
    "revision": "35c36e2f95b89a1d7230c6e3706113db"
  },
  {
    "url": "/_nuxt/8f48cd981117ac6b772d.js",
    "revision": "469c15635e4b72c09494abea25448942"
  },
  {
    "url": "/_nuxt/df30a1a0c12de57f7cc4.js",
    "revision": "e0f2427888440e80fb4811c1162ef0ec"
  }
], {
  "cacheId": "manoilov",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
