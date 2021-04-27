/* Importing required things
	========================== */

// MQTT.Js
import './dependencies/mqtt.js';

// Seting headers
const head = document.querySelector('head');

const themeHtml = `
	<meta name="theme-color" content="#000000" />
	<meta name="msapplication-navbutton-color" content="#000000" />
	<meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
	<link rel="manifest" href="/manifest.json">
	<link rel="apple-touch-icon" href="/assets/pwa-icons/icon-72x72.png">
	<link rel="apple-touch-icon" href="/assets/pwa-icons/icon-96x96.png">
	<link rel="apple-touch-icon" href="/assets/pwa-icons/icon-128x128.png">
	<link rel="apple-touch-icon" href="/assets/pwa-icons/icon-144x144.png">
	<link rel="apple-touch-icon" href="/assets/pwa-icons/icon-152x152.png">
	<link rel="apple-touch-icon" href="/assets/pwa-icons/icon-192x192.png">
	<link rel="apple-touch-icon" href="/assets/pwa-icons/icon-384x384.png">
	<link rel="apple-touch-icon" href="/assets/pwa-icons/icon-512x512.png">
	<link rel="shortcut icon" href="/assets/images/favicon.png" type="image/png" />
`;
// Head info tags injection
head.innerHTML += themeHtml;

// Page Handlers
import homeHandler from './pageHandlers/homeHandler.js';
import editBrokerHandler from './pageHandlers/editBrokerHandler.js';
import editTileHandler from './pageHandlers/editTileHandler.js';
import manageBrokersHandler from './pageHandlers/manageBrokersHandler.js';
import settingsHandler from './pageHandlers/settingsHandler.js';

// Get current url
const url = window.location.pathname;

// Run scripts according to pages to not get ui errors
if (url === '/' || url === '/index.html') {
	homeHandler();
}

if (url === '/pages/main/editbroker' || url === '/pages/main/editbroker.html') {
	editBrokerHandler();
}

if (url === '/pages/main/edittile' || url === '/pages/main/edittile.html') {
	editTileHandler();
}

if (
	url === '/pages/main/managebrokers' ||
	url === '/pages/main/managebrokers.html'
) {
	manageBrokersHandler();
}

if (
	url === '/pages/options/settings.html' ||
	url === '/pages/options/settings'
) {
	settingsHandler();
}

// Check for connection
window.addEventListener('offline', () => {
	alert(
		'You are offline, internet is required for this app to work properly, please connect to internet.'
	);
});

window.addEventListener('online', () => {
	alert('You are online, now you can use the app properly.');
});

// Register service worker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').catch(err => {
		console.log('Service worker not registered' + err);
	});
}
