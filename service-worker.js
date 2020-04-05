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
    "url": "about/index.html",
    "revision": "4df798d667a36d37d65c961c7b053da5"
  },
  {
    "url": "assets/css/0.styles.3256b711.css",
    "revision": "4a9008a92d13e96bc80eca22d85955b1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.59af9bb9.js",
    "revision": "ccfe69fc965d021bd664ca4d88ff12ad"
  },
  {
    "url": "assets/js/3.0db736e1.js",
    "revision": "b0d20f567ca721722b16fa1540d5b5ff"
  },
  {
    "url": "assets/js/4.5db70b34.js",
    "revision": "7fd140b7cf19b4fcac0817f487c3de4c"
  },
  {
    "url": "assets/js/5.39683474.js",
    "revision": "da4358cc7c3acc046751bcd6235e5b09"
  },
  {
    "url": "assets/js/6.9df18d97.js",
    "revision": "4eb199b645788ba47c0312b263e8692d"
  },
  {
    "url": "assets/js/7.ce4c8057.js",
    "revision": "9472c18c2d9372385059b2a89978102f"
  },
  {
    "url": "assets/js/8.790d2fea.js",
    "revision": "569af19087e36539788b7f135ef76f76"
  },
  {
    "url": "assets/js/9.9e35e7ab.js",
    "revision": "27e4ba5a16e032c973fd0e01c188be56"
  },
  {
    "url": "assets/js/app.f2d5af9c.js",
    "revision": "50e4a1dc2df687d1fcfc70c700f456f4"
  },
  {
    "url": "favicon-512x512.png",
    "revision": "6e137a703ae87f7c6b21446308b3281d"
  },
  {
    "url": "index.html",
    "revision": "90b21e9e1505cdae838b7a88f9761b35"
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
