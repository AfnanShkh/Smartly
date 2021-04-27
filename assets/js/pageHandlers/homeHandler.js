/*     Home Page
	==================== */

// Modules
import manageTileOptions from '../modules/homeHandler/manageTileOptions.js';
import toggleFloatingBtnOption from '../modules/homeHandler/toggleFloatingBtnOption.js';
import manageBrokerOptions from '../modules/homeHandler/manageBrokerOptions.js';
import loadBrokerOptionsAndTilesOfCurrentBroker from '../modules/homeHandler/loadBrokerOptionsAndTilesOfCurrentBroker.js';
import manageTileClicks from '../modules/homeHandler/manageTileClicks.js';
import connectToMqttBroker from '../modules/mqtt/connectToMqttBroker.js';

const homeHandler = () => {
	/*     Main things
	======================= */
	// Values
	let currentBroker = JSON.parse(localStorage.getItem('currentBroker'));
	const brokers = JSON.parse(localStorage.getItem('brokers'));
	const tiles = JSON.parse(localStorage.getItem('tiles'));

	// Elements
	const UiTiles = document.querySelector('.broker_tiles');

	// To check for brokers and current brokers. If not present act accordingle
	if (!brokers) {
		if (currentBroker) {
			localStorage.removeItem('currentBroker');
		}

		UiTiles.textContent = 'Add a broker to continue';
	} else if (!currentBroker) {
		currentBroker = brokers[0];
		localStorage.setItem('currentBroker', JSON.stringify(currentBroker));
		window.location.reload();
	} else {
		// Connect to mqtt broker
		const client = connectToMqttBroker(currentBroker);
		// Load tiles only of current brokers. This also load broker details
		loadBrokerOptionsAndTilesOfCurrentBroker(
			brokers,
			currentBroker,
			tiles,
			client
		);

		// Manage tile clicks
		const UiBrokerTiles = document.querySelectorAll('.broker_tile');
		manageTileClicks(UiBrokerTiles, client);
	}

	// Handle floating add button
	toggleFloatingBtnOption();
	// Toggle tile options and manage actions
	manageTileOptions();
	// Toggle broker options and manage actions
	manageBrokerOptions();

	// Event listner to close (hide) elements
	document.querySelector('html').addEventListener('click', e => {
		// Close tile options);
		if (!e.target.closest('.tile_options, .broker_tile_option-icon')) {
			document.querySelectorAll('.tile_options').forEach(each => {
				each.classList.add('is-hidden');
			});
		}

		// Remove modals
		if (!e.target.closest('.modal, .floating-add_btn')) {
			document.querySelector('.modal_add').classList.add('is-hidden');
		}

		if (!e.target.closest('.modal')) {
			document.querySelector('.modal_tile_types').classList.add('is-hidden');
		}

		// Remove broker options
		if (!e.target.closest('.broker_area, .broker_options')) {
			document.querySelector('.broker_options').classList.add('is-hidden');
		}
	});
};

export default homeHandler;
