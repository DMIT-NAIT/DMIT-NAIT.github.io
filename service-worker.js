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
    "revision": "0e07df34ae8410613154de5c82446b68"
  },
  {
    "url": "about/index.html",
    "revision": "8c747c8e68b7bf3317f9d0b6cb9fe0ea"
  },
  {
    "url": "assets/css/0.styles.0baf6d4c.css",
    "revision": "f17e7ce64408ce754cc72f748a5a157a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.e39091dd.js",
    "revision": "409b07e7775cd499e18acc4e6bfe564c"
  },
  {
    "url": "assets/js/3.e3aa4b6a.js",
    "revision": "4d59b9a62aaeb37455ae893525275b71"
  },
  {
    "url": "assets/js/4.cdcd594a.js",
    "revision": "94ecc4945c2eca0b37183625a1e92675"
  },
  {
    "url": "assets/js/5.5a9bd514.js",
    "revision": "17fa11b6d7ad0471d9f7bd0d8623dfba"
  },
  {
    "url": "assets/js/6.afb2c52c.js",
    "revision": "e8e2a116f0091e4af28caaab63394beb"
  },
  {
    "url": "assets/js/7.f52e2dc6.js",
    "revision": "05220fc14ce3d16414155fa0fd9c26c9"
  },
  {
    "url": "assets/js/8.d123e3ea.js",
    "revision": "535a487510005588184b7ae618bdcd85"
  },
  {
    "url": "assets/js/app.1d89b673.js",
    "revision": "da7ceefa67a13d669a0bcc296d51cf6b"
  },
  {
    "url": "favicon-512x512.png",
    "revision": "6e137a703ae87f7c6b21446308b3281d"
  },
  {
    "url": "index.html",
    "revision": "91db70c32d5220015cb0b1cf8bd2a1a4"
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
