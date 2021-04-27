/*     Manage tile clicks
  ============================= */

// Tile Click Handlers
import toggleTileClickHandler from './tileClickHandlers/toggleTileClickHandler.js';

const manageTileClicks = (tiles, client) => {
	tiles.forEach(each => {
		each.addEventListener('click', e => {
			// Data
			const tileType = e.target.getAttribute('tile-type');
			const tileId = e.target.getAttribute('tile-id');
			if ((tileType, tileId)) {
				if (tileType === 'toggle') {
					toggleTileClickHandler(tileId, each, client);
				}
			}
		});
	});
};

export default manageTileClicks;
