/*     Get tile
  =================== */

const getTileDetail = id => {
	const tiles = JSON.parse(localStorage.getItem('tiles'));

	const found = tiles.find(each => {
		return each.id === id;
	});

	return found;
};

export default getTileDetail;
