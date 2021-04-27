/*     Dalete tile
  ===================== */

const deleteTile = tileId => {
	const tiles = JSON.parse(localStorage.getItem('tiles'));

	const tilesAfterDelete = tiles.filter(each => {
		return each.id !== tileId;
	});

	if (tilesAfterDelete.length === 0) {
		localStorage.removeItem('tiles');
	} else {
		localStorage.setItem('tiles', JSON.stringify(tilesAfterDelete));
	}

	window.location.reload();
};

export default deleteTile;
