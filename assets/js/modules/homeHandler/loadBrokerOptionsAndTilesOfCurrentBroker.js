/*     Load tiles of current broker
  ==================================== */

// Ui Loaders
import toggleTileLoader from './UiTileLoaders/toggleTileLoader.js';
// Modules
import subscriber from '../mqtt/subscriber.js';
// Subscription handlers
import toggleTileSubHandler from './subscribeHandlers/toggleTileSubHandler.js';

const loadBrokerOptionsAndTilesOfCurrentBroker = (
	brokers,
	currentBroker,
	tiles,
	client
) => {
	// Elements
	const UiTiles = document.querySelector('.broker_tiles');
	const UiCurrentBrokerTitle = document.querySelector('.broker_title');
	const UiBrokerOptionsArea = document.querySelector('.broker_area');
	const UiBrokerOptions = document.querySelector('.broker_options');

	UiBrokerOptionsArea.classList.remove('is-hidden');

	UiCurrentBrokerTitle.textContent = currentBroker.title;

	let brokerList = '';

	brokers.forEach(each => {
		brokerList += `<div broker-id="${each.id}" class="broker_option">${each.title}</div>`;
	});

	UiBrokerOptions.innerHTML = brokerList;

	if (!tiles) {
		UiTiles.textContent = 'Add a tile to continue';
	} else {
		const anyTilesOfCurrentBroker = tiles.filter(each => {
			return each.ofBroker === currentBroker.id;
		});

		if (anyTilesOfCurrentBroker.length === 0) {
			UiTiles.textContent = 'Add a tile to continue';
		}

		let toggleTiles = [];

		anyTilesOfCurrentBroker.forEach(each => {
			if (each.type === 'toggle') {
				toggleTileLoader(each, UiTiles, client);
				subscriber(each, client);
				toggleTiles.push(each);
			} else if (false) {
				// For other tile types
			}
		});

		// Each type sub handlers
		toggleTileSubHandler(toggleTiles, client);
	}
};

export default loadBrokerOptionsAndTilesOfCurrentBroker;
