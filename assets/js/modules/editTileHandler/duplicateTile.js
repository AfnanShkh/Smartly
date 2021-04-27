/*     Duplicate tile
  ===================== */

// Modules
import randomString from '../common/randomString.js';

const duplicateTile = tileId => {
	const tiles = JSON.parse(localStorage.getItem('tiles'));

	const filteredTile = tiles.filter(each => {
		return each.id === tileId;
	})[0];

	tiles.push(filteredTile);

	localStorage.setItem('tiles', JSON.stringify(tiles));

	const toUpdateId = JSON.parse(localStorage.getItem('tiles'));

	toUpdateId[toUpdateId.length - 1].id = randomString(25);

	localStorage.setItem('tiles', JSON.stringify(toUpdateId));

	window.location.reload();
};

export default duplicateTile;
