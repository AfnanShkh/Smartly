const subscriber = (tile, client) => {
	client.subscribe(tile.subTopic, {
		qos: Number(tile.qos),
		rap: true
	});
};

export default subscriber;
