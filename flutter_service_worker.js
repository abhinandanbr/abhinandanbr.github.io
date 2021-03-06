'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "34eafff1f85469015dab301c3f1c510a",
"assets/assets/audio/back_custom.mp3": "718a444d50f507e860434d563ddc2fda",
"assets/assets/audio/back_medium.mp3": "f2e428d32fadb8fb03c4909a657ea42a",
"assets/assets/audio/back_path.mp3": "3d815ae92326439715c88ff64e121545",
"assets/assets/audio/blue.mp3": "aa341eb857b4fd972767430aa5babb30",
"assets/assets/audio/click.mp3": "7b257864b73a219a79572b785910e685",
"assets/assets/audio/confetti.mp3": "741b1a2cfe44964ea39ff8e640c8f8ec",
"assets/assets/audio/custom.mp3": "13e460479dc92b0ff1574d35a5204392",
"assets/assets/audio/path.mp3": "5a3cf659842b0db22ab9495ea2cdc80a",
"assets/assets/audio/shuffle.mp3": "0ac82d67f08b71d43046256dbc2db12d",
"assets/assets/audio/spinwheel.mp3": "a97d67b660101de5ddf18dd77555bfa1",
"assets/assets/audio/spinwheel_success.mp3": "2aedcd38e6fdef2eb28f9e1c0c41c085",
"assets/assets/audio/success.mp3": "746679b7331cf687df94188b40ff6f67",
"assets/assets/audio/tile_move.mp3": "f4056eec1581ee5264ab8f481a59d5d3",
"assets/assets/fonts/Courgette-Regular.ttf": "cbd252f5c26cd61243888be1891f9921",
"assets/assets/fonts/GoogleSans-Bold.ttf": "c0370e8a74992bab73461f8348e3b369",
"assets/assets/fonts/GoogleSans-BoldItalic.ttf": "aebc8fe5e393970fa3d468524e64b670",
"assets/assets/fonts/GoogleSans-Italic.ttf": "b08c7421b2d5350ea3003c8f38932601",
"assets/assets/fonts/GoogleSans-Regular.ttf": "51134713ade7b1f137e06ce395d39d40",
"assets/assets/fonts/Satisfy-Regular.ttf": "aaa5880c7a5f7e479e31a4412452d8a9",
"assets/assets/images/audio_control/blue_dashatar_off.png": "fb9cf31f68997341215e5484252350fe",
"assets/assets/images/audio_control/dashatar_on.png": "927040d878eeeb9c0700d50fac87674f",
"assets/assets/images/audio_control/green_dashatar_off.png": "8aae7e7135d47a7536b2cca91d877c2a",
"assets/assets/images/audio_control/simple_off.png": "ecac9ec0e8dc5d526e204651b5e62dcc",
"assets/assets/images/audio_control/simple_on.png": "63e24186aec21d19e6f82f88d656a951",
"assets/assets/images/audio_control/yellow_dashatar_off.png": "f1606e5fb255a5a48dbadc722a983060",
"assets/assets/images/back.png": "2afadf77b3ebf911620d06cb9ff02e9e",
"assets/assets/images/dashatar/blue/1.png": "05d5a28959eb68afdc257d86f81df8df",
"assets/assets/images/dashatar/blue/10.png": "4a8b897b54605febe3e52fc4e4af7be2",
"assets/assets/images/dashatar/blue/11.png": "7cc92a508afb5f8f11398623dc87b13d",
"assets/assets/images/dashatar/blue/12.png": "f5c7df6eeb615606ec8a0824cf5edc01",
"assets/assets/images/dashatar/blue/13.png": "c0c339eb522ed4ee91842291b86bc083",
"assets/assets/images/dashatar/blue/14.png": "b3930b781f602a18fecbc287eb8de536",
"assets/assets/images/dashatar/blue/15.png": "a7d13e26458a3945df47c5f867d91399",
"assets/assets/images/dashatar/blue/2.png": "f3175c4deda4e4da7b89fd70f4d47b20",
"assets/assets/images/dashatar/blue/3.png": "d3fe8adeec6576a60714495345c71536",
"assets/assets/images/dashatar/blue/4.png": "2db99be298e081eb8e005c1c607ec855",
"assets/assets/images/dashatar/blue/5.png": "bf5a87a649c90a2063fcee6cc1d2bcfe",
"assets/assets/images/dashatar/blue/6.png": "6f15995595827885e26620f0d28edaff",
"assets/assets/images/dashatar/blue/7.png": "33a6c0c5e4e019fba561e399494d4df8",
"assets/assets/images/dashatar/blue/8.png": "cd05b0e2b93549f4aac372874658161e",
"assets/assets/images/dashatar/blue/9.png": "a69e1869147b271c707255945b79b327",
"assets/assets/images/dashatar/custom/13.png": "d103f96c8035e4a95337917db31b4a46",
"assets/assets/images/dashatar/gallery/blue.png": "0d11f20efc6570a048f7fdaaaf91fb01",
"assets/assets/images/dashatar/gallery/custom.png": "091bc0f0c04cd0143acad06df31aeec8",
"assets/assets/images/dashatar/gallery/path.png": "8b9fca9e0e26dd9142e81ec6c62493de",
"assets/assets/images/dashatar/path/1.png": "5870e0648a61ecfd5af29a5320344187",
"assets/assets/images/dashatar/path/10.png": "a216bd0cf71638190575d99abda9f017",
"assets/assets/images/dashatar/path/11.png": "952fb53e583b615def77b4e0a2f26fa9",
"assets/assets/images/dashatar/path/12.png": "55f36ca10676b5b478eab5c5de8edf30",
"assets/assets/images/dashatar/path/13.png": "780c627ca54935c675fcb54e93b59e81",
"assets/assets/images/dashatar/path/14.png": "7a052a24b1a102e98ae5065f5654a1be",
"assets/assets/images/dashatar/path/15.png": "5c122819be6665f720995e9db246cd2f",
"assets/assets/images/dashatar/path/16.png": "92d11c4e62ed146bdbe3acb44636b6c5",
"assets/assets/images/dashatar/path/2.png": "38c749c1ba3ac26fb9cd004c589ee0bc",
"assets/assets/images/dashatar/path/3.png": "f54549f0044e7e2987321dbf24cf04ec",
"assets/assets/images/dashatar/path/4.png": "f50df846b19010330e0e39dbdb462f14",
"assets/assets/images/dashatar/path/5.png": "a5b5ad3f525e892425604c8deab00fc1",
"assets/assets/images/dashatar/path/6.png": "04aa05179a441488b21670fd22be6405",
"assets/assets/images/dashatar/path/7.png": "2492c661992d3f0dc5cf6dcddc9aa13f",
"assets/assets/images/dashatar/path/8.png": "06fdf898a913d40bcad9d39ed2097f7d",
"assets/assets/images/dashatar/path/9.png": "a301803f3267c9810b515b8bced8abe4",
"assets/assets/images/dashatar/success/blue.png": "993266c9723f234300d052cd4fda43d1",
"assets/assets/images/dashatar/success/custom.png": "7c284d7b36bb5388c4d87b1dd5cf3f88",
"assets/assets/images/dashatar/success/path.png": "465a702d71ebaa5854840e712f15c6ee",
"assets/assets/images/facebook_icon.png": "284d2a1d2782e5e24b1f9bce25f3ea9a",
"assets/assets/images/help.png": "675233b74b1bccabbfe06a1fb99303f3",
"assets/assets/images/logo_flutter_color.png": "378c8f6dfc3849102bad262c3d2326ba",
"assets/assets/images/logo_flutter_white.png": "54c870caa49997bbcd24846502a722c7",
"assets/assets/images/medal.png": "da144f5ef4e9b1a3e7428a87f66abfd4",
"assets/assets/images/parallax/bg.png": "5ee16a9d873ad710c7d3e5d46d73bc99",
"assets/assets/images/parallax/ember.png": "380a5d0da77747e39f66c0a768a1b63f",
"assets/assets/images/parallax/foreground-trees.png": "bb2a448ca825c1fee598360f88c59fb6",
"assets/assets/images/parallax/license.txt": "410d5ee77b9ceb8a5cafc91cb28cf95d",
"assets/assets/images/parallax/mountain-far.png": "823af70e59168a9289857aee3dbd3c3b",
"assets/assets/images/splash/angry.gif": "bc26ee9e4145b6d6bae8cf948c2b7e51",
"assets/assets/images/splash/bored.gif": "2dcc26ee40347a45e18efb9fb2d1c91c",
"assets/assets/images/splash/custom.json": "0007c7c3096edc2cc44bc02b0bde29eb",
"assets/assets/images/splash/happy.gif": "17fd21f7dff87a829ce3652e7143ecee",
"assets/assets/images/splash/hello.json": "d91c6d40e89fc9901dfa228c393fd255",
"assets/assets/images/splash/loading.json": "a5b93472576e7a1b1cda3a1aafb5bc0e",
"assets/assets/images/splash/loading_custom.json": "fb54677f8458b0f168a60ec2f18bd3d4",
"assets/assets/images/splash/loading_puzzle.json": "b0c8856cb2b63cfc3790e3af4da24da7",
"assets/assets/images/splash/roulette-center.png": "87c16358ebbb624daa25e2e4985bf23e",
"assets/assets/images/splash/roulette.png": "8ab99ca02f4e5bf23dade797328be111",
"assets/assets/images/timer_icon.png": "284049eb59c25888ebe6ecf864728727",
"assets/assets/images/twitter_icon.png": "f9a8b83fc280f6a6363783cdbdd81573",
"assets/assets/images/wall.png": "3c1e50aab4514eb9d3a25ec3730d62a9",
"assets/FontManifest.json": "2c45bc5b7a5aa9bd2d4ed5a297f2e408",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "a3b2149c0a326405c92fe517c8551989",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "0159a53391514808e5798fe8782f17d5",
"icons/favicon.png": "7a26ea9d4e61122fc023b84e5acdb148",
"icons/Icon-192.png": "12d05db1c0b26d429b54e3f8c946a496",
"icons/Icon-512.png": "aabba36693aba0ec8d954adf297d3125",
"ic_launcher-playstore.png": "a4eff94190e1e750139db49fb099484a",
"index.html": "ff7b6719e1e828b83a7c4614b3d72fda",
"/": "ff7b6719e1e828b83a7c4614b3d72fda",
"main.dart.js": "4cb39ee6ccd02f9096ea7423452ac0b6",
"manifest.json": "f57fab3ae594c65d5ce4da08a90fcc7c",
"version.json": "7bd0276c7c9973ca16bdf0a4377ec86f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
