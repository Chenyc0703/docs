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
    "revision": "5aaf3d055aed98a02600e3a2e0037bd2"
  },
  {
    "url": "about.html",
    "revision": "90ee97623c9266b537c8422bb97753d1"
  },
  {
    "url": "about1.html",
    "revision": "5e1f720207e2c4bdce6c4103a10ec414"
  },
  {
    "url": "about2.html",
    "revision": "b627add04cfddded961562a04bf9227a"
  },
  {
    "url": "assets/css/0.styles.694f3f6f.css",
    "revision": "ae42aa586e5b973d5a00bb108022620c"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "592a8c99d90eeb38afe533f298c8edcc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5e0361e6.js",
    "revision": "2d90a9e14a65fca4fa3bffe185156653"
  },
  {
    "url": "assets/js/11.3d300b42.js",
    "revision": "31a29e029eb36c313eb68e183b18a19d"
  },
  {
    "url": "assets/js/12.69479cbd.js",
    "revision": "133eb5b023c8fdc9ed4a2ebfd4a39bff"
  },
  {
    "url": "assets/js/2.0b4e2031.js",
    "revision": "90b7372b0b0d685c873901160ffb2425"
  },
  {
    "url": "assets/js/3.6d56b144.js",
    "revision": "8254743376941fb3dd59d3a412235c40"
  },
  {
    "url": "assets/js/4.47117109.js",
    "revision": "9cc9768eaf9f235f8b0a22d2e12b4879"
  },
  {
    "url": "assets/js/5.1b5d516b.js",
    "revision": "5b3bf1ddc4cd88aa005f14ad334e1921"
  },
  {
    "url": "assets/js/6.ef46e70c.js",
    "revision": "6e74c106c0f6bef216d698ae696fe20a"
  },
  {
    "url": "assets/js/7.d39c64e5.js",
    "revision": "66289b06025ca467c4dca190bb0e49a7"
  },
  {
    "url": "assets/js/8.b68c2da4.js",
    "revision": "f2cb9a035b355e7003f61df7a1c6f515"
  },
  {
    "url": "assets/js/9.ce354d5a.js",
    "revision": "d096bcd24669d234dc0039ac400581ae"
  },
  {
    "url": "assets/js/app.622c4270.js",
    "revision": "526dc8af33430fc3f141fa3397daf9a5"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "130d2f5dfaeb43f0ffc7b5ea977f26a6"
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
