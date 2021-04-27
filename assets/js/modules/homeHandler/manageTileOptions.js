/*     Manage tile options
	============================ */

// Modules
import deleteTile from '../editTileHandler/deleteTile.js';
import duplicateTile from '../editTileHandler/duplicateTile.js';

const manageTileOptions = () => {
	const tileOptionBtn = document.querySelectorAll('.broker_tile_option-icon');
	const tileActionBtn = document.querySelectorAll('.tile_option');

	tileOptionBtn.forEach(each => {
		each.addEventListener('click', e => {
			if (e.target.nextElementSibling.classList.contains('is-hidden')) {
				document.querySelectorAll('.tile_options').forEach(each => {
					if (!each.classList.contains('is-hidden')) {
						each.classList.add('is-hidden');
					}
				});
			}

			e.target.nextElementSibling.classList.toggle('is-hidden');
		});
	});

	tileActionBtn.forEach(each => {
		each.addEventListener('click', e => {
			let tileId;
			let action;

			if (
				e.target.classList.contains('tile_option_text') ||
				e.target.classList.contains('tile_option_icon')
			) {
				tileId = e.target.parentElement.parentElement.parentElement.getAttribute(
					'tile-id'
				);
				action = e.target.parentElement.getAttribute('this-option');
			} else {
				tileId = e.target.parentElement.parentElement.getAttribute('tile-id');
				action = e.target.getAttribute('this-option');
			}

			if (action === 'edit') {
				window.location.href = `/pages/main/edittile.html?id=${tileId}`;
			} else if (action === 'delete') {
				if (
					confirm(
						'ATTENTION: THIS ACTION CANNOT BE REVERSED. Are you sure you want to delete this tile'
					)
				) {
					deleteTile(tileId);
				}
			} else if (action === 'duplicate') {
				duplicateTile(tileId);
			}
		});
	});
};

export default manageTileOptions;
