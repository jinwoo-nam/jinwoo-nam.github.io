'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "cd6c12c37152cff7883cebb765e1232d",
"index.html": "e5c13f3f9699bf23e5436a8654805111",
"/": "e5c13f3f9699bf23e5436a8654805111",
"main.dart.js": "af9907c9a4a91a17cbd0c53add975ed8",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6584fbc8984bd1c46294434bca5bfd5e",
"assets/AssetManifest.json": "69435505f061702e535def19e6b8f74c",
"assets/NOTICES": "64952ea57d6289ad09a51003f46c0189",
"assets/img/papps/O2OCommerce.png": "ef9b890e569791cceb2cb75f6661d99b",
"assets/img/papps/game_desc.png": "d677c2d5b079ee103817f4d78ed61bb3",
"assets/img/papps/etrade_desc.png": "1462efff32acf0ca87b34abb3f972738",
"assets/img/papps/MBPP_desc.png": "c8a4e96767fd7e901790f5f90f02b6e9",
"assets/img/papps/rewarddonation.png": "cb2714b82c4fc6678afdfcd568af5126",
"assets/img/papps/ip_desc.png": "a74eb2eff50be552ce99bd4e4481460e",
"assets/img/team/o2o04.png": "ab7f8d0ffaf4f2ca1deb1d28ca7cac3b",
"assets/img/team/tech02.png": "246ce41f3b882caff47995c4a3e5314e",
"assets/img/team/tech01.png": "607cb2c0c288e17cb76856a460f0c063",
"assets/img/team/o2o02.png": "761be45207a137752a0a2d866b33970f",
"assets/img/team/o2o03.png": "310867f477efe9d12846ad276cceda26",
"assets/img/team/o2o01.png": "fe9e598bd8e41ff7e22008f55ef8bccd",
"assets/img/team/game2.png": "21c9576d40c4dc5dfe5f1d5747dae5fa",
"assets/img/team/team01.png": "e276d519ff5c2244b983f1cffe79b784",
"assets/img/team/team03.png": "e5bcb48ff426eee1dc2faf2316035c0e",
"assets/img/team/game1.png": "9b61d4b5787b0a55c6ed96b59f26edf1",
"assets/img/team/team02.png": "e41100cd09c50cc8189d86d910612c3f",
"assets/img/team/team06.png": "28df296101fa57b276da27752d443ead",
"assets/img/team/team07.png": "170047da3b0e104a14771bea012b33b9",
"assets/img/team/team05.png": "887ffaa1d00e8f94ce654d1419538f6f",
"assets/img/team/team04.png": "29a2e40cba3ccef9d63fb869c4ad720c",
"assets/img/team/ip01.png": "1e8be0feb6a3fc6d0ceb39dd194b21a7",
"assets/img/team/linkedin.png": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/img/team/Facebook-icon-1.png": "04d1816bf0df58f66d5c96c2f2982c03",
"assets/img/main/kmalta3.jpeg": "4d2e166c7768e4b3503c559420984077",
"assets/img/main/o2o.png": "e5d2fc8a54ad933be5a9c3bf7bf5e700",
"assets/img/main/telegram_icon.png": "1d1ff5697e90dd9e1720bb69d8efa9f1",
"assets/img/main/game.png": "0ac67778004e7d40acaa9b315c160542",
"assets/img/main/banks.png": "a725e81825da9493d943f5a7fd3857e5",
"assets/img/main/funddistribution.png": "4f37c3f96b6bcb2082062d37b0d54c77",
"assets/img/main/kmalta2.jpeg": "6166bbfbd8b72fdc4141900ce47256fd",
"assets/img/main/bff1.jpeg": "059d7cb398f97dc25a21667512b1fe90",
"assets/img/main/instapay_logo.jpeg": "e57e4bb90f1b96a3b3fe13eeabaccc04",
"assets/img/main/kmalta5.jpeg": "49f1406401bc94bd2b1d3e4c8cb99807",
"assets/img/main/coindistribution.png": "fe96b44ad31b020042d5fb5b29b9e33f",
"assets/img/main/kmalta4.jpeg": "b976f65da947b9d54325380590b2643f",
"assets/img/main/public.png": "772e5dc1fb3f374954258d43d70c3179",
"assets/img/main/main_phone.png": "b3086e3d430afbfb9afbb089b74396f3",
"assets/img/main/ip.png": "166e0c51262154f0645644c343ff36a7",
"assets/img/main/bff3.jpeg": "62a6a90c66b7ff48c61adf2bebf641f8",
"assets/img/main/private.png": "05cc00230f11ed92535461829c79267b",
"assets/img/main/mbpp.png": "f1181ba5e8ffa3945f99c27985bfd341",
"assets/img/main/logo_cs-1.png": "25c7f3d360a895d50319fd47741e8412",
"assets/img/main/bff2.jpeg": "2829f8037e0760f28b6838d37d179d4d",
"assets/img/main/etrade.png": "2108d94663648329e9609160d2c0d907",
"assets/img/main/icon_naver_blog-300x300.png": "c2e156b0b0d6746b44ae6aec9055c527",
"assets/img/main/coininfotable.jpg": "7e00844bc3c122475ba4690091152d1f",
"assets/img/main/kmalta1.jpeg": "c1a0b69f8dce0d09e5dc75df8abf6e83",
"assets/img/main/Instapay_Ecosystem.jpeg": "fed7a67f0cc3c72bb43dd23d484d8d7a",
"assets/img/main/bff5.jpeg": "d236b4e3bb62d4ec1646947d11d2003b",
"assets/img/main/Facebook-icon-1.png": "04d1816bf0df58f66d5c96c2f2982c03",
"assets/img/main/bff4.jpeg": "36fbaf3e53670a3c41130b842f52e28a",
"assets/img/main/reward.png": "e1a791a10b1a19424f161a1acafe57d2",
"assets/img/main/why1-1.png": "e06ecb499ac1face6f5296df6e8ed0e6",
"assets/img/main/facebook-logo-png-5a35528eaa4f08.7998622015134439826976-e1534374636245.png": "8bb09d1e08813cb9c0124f6b069bf106",
"assets/img/main/why1-2.png": "21b42a86f14c68b70eb337dfc362c94d",
"assets/img/main/why1-3.png": "6d11edf6ae638786d890466ac86eb8ff",
"assets/img/main/main_line.png": "e2de427eb58a6a2719cf6123c138d88d",
"assets/img/media/media47.jpg": "b5c5a653edcc97c18ddb7810b72ba907",
"assets/img/media/event02.jpg": "721b17c6d7f4007412a4adc39246de32",
"assets/img/media/event_cypto.jpg": "b918a5578e8b938d565bef761492fa73",
"assets/img/media/event_amble.jpg": "d256c6f1be5db4e1a701d4a9959eabdd",
"assets/img/media/event03.jpg": "a44f24f4ec3947790e08ade6518f4c18",
"assets/img/media/event_crypto-angels.jpg": "27b71c3ab577bd15f3d2f4520bd021a5",
"assets/img/media/media46.jpg": "2cf0a1ce9fbf6d096c26097ff4b63b6e",
"assets/img/media/media52.jpg": "3471a5a509733f4d9647066c05277a5b",
"assets/img/media/media44.jpg": "92bb168946f0a70537b4b75491f49915",
"assets/img/media/media50.jpg": "b440e2bb7f3bc8e4d2b050fd762b8528",
"assets/img/media/col04.jpg": "6bd9789e8a3829e84b6182f852411a88",
"assets/img/media/event01.jpg": "e0251863b4088fd586dca588baafb61c",
"assets/img/media/media51.jpg": "c2887247e271c027c658db960b5d5908",
"assets/img/media/media45.jpg": "664dcf9d69133d59977c6b9cffc0e3db",
"assets/img/media/media41.jpg": "7b821a8169a1efc5a353e6cc67a238c7",
"assets/img/media/event10.jpg": "3c2636aa87a118f78f745689afd8bfc7",
"assets/img/media/col01.jpg": "8dcb8a67c07cdeb087d54e78be3ba8bf",
"assets/img/media/event04.jpg": "4516e0c9d1170ed1ca22b99aaa61f6d0",
"assets/img/media/event05.jpg": "c0ea8be06b977e9810f9eef7e3a3fdcc",
"assets/img/media/event11.jpg": "1ea020f53c4e543455d89e6aef06aafb",
"assets/img/media/media40.jpg": "6056236d91366b4bc354c970e31f3369",
"assets/img/media/event_instapay.jpg": "5f1ee90596768da76cd46adc65e2a773",
"assets/img/media/media42.jpg": "a632d6d104f4b5087a5961653656293a",
"assets/img/media/event07.jpg": "adc067f5799542111e4199f242cfac5b",
"assets/img/media/event13.jpg": "f3bb738bd7fddfb7164d1c661dbb54ff",
"assets/img/media/col02.jpg": "9c9c59a3b39ed90ceae3f3ff171ff085",
"assets/img/media/event_gmgc.jpg": "04778be6f4f6379e2201369ba919c4df",
"assets/img/media/col03.jpg": "f580bb0b4f0cf4a9195bff54a8792986",
"assets/img/media/event12.jpg": "d15f0f1560848dbeec3c12bc05ef9e52",
"assets/img/media/event06.jpg": "bf2b399790cced2af035fd31df4c2b59",
"assets/img/media/media43.jpg": "0dc7002582fefdf9a75fc2b48525d872",
"assets/img/media/media30.jpg": "7ce0af5a0fcebf1cd3b3d3ef66bb9601",
"assets/img/media/media24.jpg": "827c25954f40f465031a814db609a44a",
"assets/img/media/media18.jpg": "0473591b166a10eca151d2553ea1fe4f",
"assets/img/media/event_albaron.jpg": "d5ebd65664b0c1d56415edd5b5a74b2e",
"assets/img/media/media19.jpg": "b157f6329459fe5967035bc4a23192f9",
"assets/img/media/media25.jpg": "9b7c254f23b580cde51a9b7b7009a5f6",
"assets/img/media/media31.jpg": "3542417090537f572ecfa2cfe7c49e41",
"assets/img/media/media27.jpg": "59dc82efbfc3e4211ceae91b28d39484",
"assets/img/media/media33.jpg": "ccccfdb16b664771101c434a62ae446e",
"assets/img/media/media32.jpg": "f3ecbc8c228fad4a0cf64e53f41600b7",
"assets/img/media/media26.jpg": "07495a30eec750df635bddf988be5ff4",
"assets/img/media/media22.jpg": "5a14fa0f1f9bd84bf72e9566a981ffad",
"assets/img/media/media36.jpg": "f51dd303dab5d7adc6a1ac2f9f56ca9a",
"assets/img/media/event_delta.jpg": "c35400e9e6df11f423f9e7ec23f8e762",
"assets/img/media/media37.jpg": "4bfe3d833251c58234e1ac5d45fef8e8",
"assets/img/media/media23.jpg": "0ba0feb5380aa7480caac9b49549927e",
"assets/img/media/media09.jpg": "8683f669a69b28055532ef98c0cb7064",
"assets/img/media/media35.jpg": "b99f216ef88d89f7df854ecc21cf4e3d",
"assets/img/media/media21.jpg": "1940b247588c61c5588e033b4f6631f0",
"assets/img/media/media20.jpg": "07190e56aae86cd73696c3ab0c9fcee1",
"assets/img/media/media34.jpg": "3e55e5a4b1d5cdf47ccec5686f57cf50",
"assets/img/media/media08.jpg": "b63f3cc3f6fca5f4c2c931847dff9287",
"assets/img/media/media11.jpg": "d1280fa025c0cad50672eb36eebc80b1",
"assets/img/media/media05.jpg": "00647e760e58653cd0ad81d73b6fe263",
"assets/img/media/media39.jpg": "74d8f4bf7f1545c461a40a2bc5f855aa",
"assets/img/media/event_bgcc.jpg": "607b5fea8718dda0951fad26e08428e3",
"assets/img/media/media38.jpg": "e31dff53e2010fc5d9b54bd60dab8200",
"assets/img/media/media04.jpg": "7f87fccf97200c76bfce41d50d10a61d",
"assets/img/media/media10.jpg": "57ec129570161729c25937bf5103b71d",
"assets/img/media/media06.jpg": "375bf027df5b446b9e403db5d7b1c381",
"assets/img/media/media13.jpg": "4c79e6d9473b9f9527d18a4f615c5650",
"assets/img/media/media07.jpg": "beec5d561702de9fb667c42efb96d83d",
"assets/img/media/media03.jpg": "43b3862bf698a515fb55784e6f6ac944",
"assets/img/media/media17.jpg": "9a7685ec46e402cd699ec9589bcd0d70",
"assets/img/media/media02.jpg": "b4c7179026abda76a5d3b8c936bd6a25",
"assets/img/media/media28.jpg": "1ae42319c8a6cb4843aeaee98cf198c9",
"assets/img/media/media14.jpg": "14d4057b78a2f356e6000b44e9f0cdbf",
"assets/img/media/event_instacoin.jpg": "25c7f3d360a895d50319fd47741e8412",
"assets/img/media/media01.jpg": "094065ee9671883f70914d25c8cd1ab5",
"assets/img/media/media29.jpg": "9bf61db8aae9af3c8be30f75e90af338",
"assets/img/media/event08.jpg": "abd3aece305d08a958a13f00b6a3baaf",
"assets/img/media/event09.jpg": "6f6bdaf629e8c3007a90b56a28f1c3a5",
"assets/img/media/media48.jpg": "97a272b7c43ff35a82ec979481e64f66",
"assets/img/media/media49.jpg": "e3afc1431cbc87fba9bdbc7c86d7dba7",
"assets/img/media/event_openchaink.jpg": "5470e9222cb5519d51b8890f00ac523f",
"assets/img/media/event_worldblockchain.jpg": "09db7303cc6c98683325a292e0c1996f",
"assets/FontManifest.json": "b5b01b8ec83bb87cdfe7ba762b4b58ef",
"assets/packages/pod_player/assets/forward_left.json": "f198394de9533a75cbd3bbfb223756ff",
"assets/packages/pod_player/assets/forward_right.json": "421233151632a84b7b935b4cdc9a967a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/font/source_sans_pro/SourceSansPro-Regular.ttf": "47dbe5824a2d82b794ef1f52809699a5",
"assets/font/source_sans_pro/SourceSansPro-Bold.ttf": "09ad953751e1109778ece9318df70540",
"assets/font/source_sans_pro/SourceSansPro-Light.ttf": "e7208e0bdca1887f658b9ac66c988a95",
"assets/font/source_sans_pro/SourceSansPro-ExtraLight.ttf": "9abcaabad7edf02f2033933f0a96221d",
"assets/font/source_sans_pro/SourceSansPro-SemiBold.ttf": "c1b4f417cf21451e85a0baccbfd8edc8",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
