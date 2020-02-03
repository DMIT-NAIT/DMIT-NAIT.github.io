/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7d64f6d3a0d08d89f28531e1342bcfd5"
  },
  {
    "url": "about/index.html",
    "revision": "85158ba9d4990790a88825867916a47e"
  },
  {
    "url": "about/todo.html",
    "revision": "719a06b7ead1ea12dbf7a06d1598729d"
  },
  {
    "url": "assets/css/0.styles.0baf6d4c.css",
    "revision": "f17e7ce64408ce754cc72f748a5a157a"
  },
  {
    "url": "assets/img/CreateFromTemplate.328dd274.png",
    "revision": "328dd27418475a8e0b8765fea720d4a6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.bc617582.js",
    "revision": "2b00b109d03389d3b33382845223bd3b"
  },
  {
    "url": "assets/js/3.dcbc4a49.js",
    "revision": "58eb8002cfd7b4ba2406b1a108b58e21"
  },
  {
    "url": "assets/js/4.28cc3e77.js",
    "revision": "c7c648ccca7d87db729e470949368351"
  },
  {
    "url": "assets/js/5.0334c8c6.js",
    "revision": "2d260002a43b78c6da7d948bea5534eb"
  },
  {
    "url": "assets/js/6.db1f1083.js",
    "revision": "862105801ae5e798b010ef7c78b7e796"
  },
  {
    "url": "assets/js/7.01ef2334.js",
    "revision": "62bd8978418a3d311de26db93dfec608"
  },
  {
    "url": "assets/js/8.7134f418.js",
    "revision": "f2248fb606c8ed3c86264ffaf1f160ca"
  },
  {
    "url": "assets/js/9.cf2fcc9d.js",
    "revision": "e8b86536eff7f27c4565d40df0a559c7"
  },
  {
    "url": "assets/js/app.f6a72c72.js",
    "revision": "51fe9e9ab53bff1925c7d66a05a34cfd"
  },
  {
    "url": "favicon-512x512.png",
    "revision": "6e137a703ae87f7c6b21446308b3281d"
  },
  {
    "url": "index.html",
    "revision": "26554c70a9d969ff3e77ae368b11fbca"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
