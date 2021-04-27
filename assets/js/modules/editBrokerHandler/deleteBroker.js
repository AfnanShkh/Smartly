/*     Dalete broker
  ===================== */

const deleteBroker = brokerId => {
	const brokers = JSON.parse(localStorage.getItem('brokers'));
	const currentBroker = JSON.parse(localStorage.getItem('currentBroker'));
	const tiles = JSON.parse(localStorage.getItem('tiles'));

	const brokersAfterDelete = brokers.filter(each => {
		return each.id !== brokerId;
	});

	if (brokersAfterDelete.length !== 0) {
		localStorage.setItem('brokers', JSON.stringify(brokersAfterDelete));
	} else {
		localStorage.removeItem('brokers');
	}

	if (tiles) {
		const filteredTiles = tiles.filter(each => {
			return each.ofBroker !== brokerId;
		});

		if (filteredTiles.length !== 0) {
			localStorage.setItem('tiles', JSON.stringify(filteredTiles));
		} else {
			localStorage.removeItem('tiles');
		}
	}

	if (currentBroker) {
		if (currentBroker.id === brokerId) {
			localStorage.removeItem('currentBroker');
		}
	}

	window.location.reload();
};

export default deleteBroker;
