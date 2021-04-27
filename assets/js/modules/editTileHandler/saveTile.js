/*     Save broker
  ===================== */

// Modules
import randomString from '../common/randomString.js';

const saveTile = data => {
	let error;

	data.qos === '' ? (data.qos = 1) : Number(data.qos);

	data.id = randomString(25);

	const brokers = JSON.parse(localStorage.getItem('brokers'));
	let currentBroker = JSON.parse(localStorage.getItem('currentBroker'));

	if (!brokers) {
		error = 'No broker added, add a broker to add a tile';
	} else if (!currentBroker) {
		currentBroker = brokers[0];

		localStorage.setItem('currentBroker', JSON.stringify(currentBroker));

		data.ofBroker = currentBroker.id;

		if (!JSON.parse(localStorage.getItem('tiles'))) {
			const tiles = [];

			tiles.push(data);

			localStorage.setItem('tiles', JSON.stringify(tiles));
		} else {
			const tiles = JSON.parse(localStorage.getItem('tiles'));

			tiles.push(data);

			localStorage.setItem('tiles', JSON.stringify(tiles));
		}
	} else {
		data.ofBroker = currentBroker.id;

		if (!JSON.parse(localStorage.getItem('tiles'))) {
			const tiles = [];

			tiles.push(data);

			localStorage.setItem('tiles', JSON.stringify(tiles));
		} else {
			const tiles = JSON.parse(localStorage.getItem('tiles'));

			tiles.push(data);

			localStorage.setItem('tiles', JSON.stringify(tiles));
		}
	}

	return { error };
};

export default saveTile;
