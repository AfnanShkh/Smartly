/*     Update toggle tile
  =========================== */

const updateToggleTile = (id, newData) => {
	const tiles = JSON.parse(localStorage.getItem('tiles'));

	const indexOfTile = tiles.findIndex(each => {
		return each.id === id;
	});

	tiles[indexOfTile].title = newData.title;
	tiles[indexOfTile].pubTopic = newData.pubTopic;
	tiles[indexOfTile].subTopic = newData.subTopic;
	tiles[indexOfTile].retained = newData.retained;
	tiles[indexOfTile].qos = newData.qos;
	tiles[indexOfTile].onValue = newData.onValue;
	tiles[indexOfTile].offValue = newData.offValue;

	localStorage.setItem('tiles', JSON.stringify(tiles));
	return true;
};

export default updateToggleTile;
