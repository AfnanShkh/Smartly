const toggleTileClickHandler = (tileId, tile, client) => {
	const tiles = JSON.parse(localStorage.getItem('tiles'));
	const currentStateOfTile = tile.getAttribute('current-state');
	let valueToPublish;

	const clickedTile = tiles.filter(each => {
		return each.id === tileId;
	})[0];

	if (currentStateOfTile === 'on') {
		valueToPublish = clickedTile.offValue;
	} else {
		valueToPublish = clickedTile.onValue;
	}

	// Publish data with mqtt
	client.publish(clickedTile.pubTopic, valueToPublish, {
		qos: Number(clickedTile.qos),
		retain: clickedTile.retained
	});
};

export default toggleTileClickHandler;
