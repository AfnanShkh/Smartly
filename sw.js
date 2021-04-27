const staticCacheName = 'site_static-v0.0.0';
const dynamicCacheName = 'site_dynamic-v0.0.0';

const assets = [
	'/',
	'/index.html',
	'/assets/js/app.js',
	'/assets/js/dependencies/mqtt.js',
	'/assets/js/modules/common/randomString.js',
	'/assets/js/modules/editBrokerHandler/deleteBroker.js',
	'/assets/js/modules/editBrokerHandler/getBrokerDetail.js',
	'/assets/js/modules/editBrokerHandler/loadBrokerToForm.js',
	'/assets/js/modules/editBrokerHandler/saveBroker.js',
	'/assets/js/modules/editBrokerHandler/updateBroker.js',
	'/assets/js/modules/editBrokerHandler/validateEditBrokerForm.js',
	'/assets/js/modules/editTileHandler/loaders/loadTileToToggleForm.js',
	'/assets/js/modules/editTileHandler/pages/toggleTilePage.js',
	'/assets/js/modules/editTileHandler/updaters/updateToggleTile.js',
	'/assets/js/modules/editTileHandler/validators/validateToggleTile.js',
	'/assets/js/modules/editTileHandler/deleteTile.js',
	'/assets/js/modules/editTileHandler/duplicateTile.js',
	'/assets/js/modules/editTileHandler/getTileDetail.js',
	'/assets/js/modules/editTileHandler/saveTile.js',
	'/assets/js/modules/homeHandler/subscribeHandlers/toggleTileSubHandler.js',
	'/assets/js/modules/homeHandler/tileClickHandlers/toggleTileClickHandler.js',
	'/assets/js/modules/homeHandler/UiTileLoaders/toggleTileLoader.js',
	'/assets/js/modules/homeHandler/loadBrokerOptionsAndTilesOfCurrentBroker.js',
	'/assets/js/modules/homeHandler/manageBrokerOptions.js',
	'/assets/js/modules/homeHandler/manageTileClicks.js',
	'/assets/js/modules/homeHandler/manageTileOptions.js',
	'/assets/js/modules/homeHandler/toggleFloatingBtnOption.js',
	'/assets/js/modules/manageBrokersHandler/loadAllBrokers.js',
	'/assets/js/modules/manageBrokersHandler/manageBrokersOptions.js',
	'/assets/js/modules/mqtt/connectToMqttBroker.js',
	'/assets/js/modules/mqtt/subscriber.js',
	'/assets/js/modules/settingsHandler/downloadSettings.js',
	'/assets/js/modules/settingsHandler/uploadSettings.js',
	'/assets/js/pageHandlers/editBrokerHandler.js',
	'/assets/js/pageHandlers/editTileHandler.js',
	'/assets/js/pageHandlers/homeHandler.js',
	'/assets/js/pageHandlers/manageBrokersHandler.js',
	'/assets/js/pageHandlers/settingsHandler.js',
	'/assets/css/base/all.css',
	'/assets/css/base/base.css',
	'/assets/css/base/reset.css',
	'/assets/css/base/variables.css',
	'/assets/css/layout/all.css',
	'/assets/css/layout/columns.css',
	'/assets/css/layout/footer.css',
	'/assets/css/layout/header.css',
	'/assets/css/layout/main.css',
	'/assets/css/module/all.css',
	'/assets/css/module/buttons.css',
	'/assets/css/module/form.css',
	'/assets/css/module/logo.css',
	'/assets/css/module/modal.css',
	'/assets/css/module/tiles.css',
	'/assets/css/state/all.css',
	'/assets/css/state/state.css',
	'/assets/css/theme/all.css',
	'/assets/css/theme/default.css',
	'/assets/css/styles.css',
	'/assets/icons/app/common/checkbox.svg',
	'/assets/icons/app/home/broker-info-drop.svg',
	'/assets/icons/app/home/broker-tile-option.svg',
	'/assets/icons/app/home/floating-add.svg',
	'/assets/icons/app/home/tile-delete.svg',
	'/assets/icons/app/home/tile-duplicate.svg',
	'/assets/icons/app/home/tile-edit.svg',
	'/assets/icons/app/menu/menu-about.svg',
	'/assets/icons/app/menu/menu-contact.svg',
	'/assets/icons/app/settings/dark-mode.svg',
	'/assets/icons/app/settings/download-settings.svg',
	'/assets/icons/app/settings/manage-brokers.svg',
	'/assets/icons/app/settings/manage-brokers_delete.svg',
	'/assets/icons/app/settings/manage-brokers_edit.svg',
	'/assets/icons/app/settings/upload-settings.svg',
	'/assets/icons/app/social/github.svg',
	'/assets/icons/app/social/instagram.svg',
	'/assets/icons/app/social/twitter.svg',
	'/assets/pwa-icons/icon-128x128.png',
	'/assets/pwa-icons/icon-144x144.png',
	'/assets/pwa-icons/icon-152x152.png',
	'/assets/pwa-icons/icon-192x192.png',
	'/assets/pwa-icons/icon-384x384.png',
	'/assets/pwa-icons/icon-512x512.png',
	'/assets/pwa-icons/icon-72x72.png',
	'/assets/pwa-icons/icon-96x96.png',
	'/offline.html'
];

const limitCacheSize = (name, size) => {
	caches.open(name).then(cache => {
		cache.keys().then(keys => {
			if (keys.length > size) {
				cache.delete(keys[0]).then(limitCacheSize(name, size));
			}
		});
	});
};

// Install service worker
self.addEventListener('install', e => {
	e.waitUntil(
		caches.open(staticCacheName).then(cache => {
			cache.addAll(assets);
		})
	);
});

// Activate service worker
self.addEventListener('activate', e => {
	e.waitUntil(
		caches.keys().then(keys => {
			return Promise.all(
				keys
					.filter(key => key !== staticCacheName && key !== dynamicCacheName)
					.map(key => caches.delete(key))
			);
		})
	);
});

// Fetch event
self.addEventListener('fetch', e => {
	e.respondWith(
		caches
			.match(e.request)
			.then(cacheRes => {
				return (
					cacheRes ||
					fetch(e.request).then(async fetchRes => {
						const cache = await caches.open(dynamicCacheName);
						cache.put(e.request.url, fetchRes.clone());
						limitCacheSize(dynamicCacheName, 40);
						return fetchRes;
					})
				);
			})
			.catch(() => caches.match('/offline.html'))
	);
});
