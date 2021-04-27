/*     Edit Tile Page
	========================= */

// Pages
import toggleTilePage from '../modules/editTileHandler/pages/toggleTilePage.js';

// Modules
import validateToggleTile from '../modules/editTileHandler/validators/validateToggleTile.js';
import saveTile from '../modules/editTileHandler/saveTile.js';
import getTileDetail from '../modules/editTileHandler/getTileDetail.js';

// Loaders
import loadTileToToggleForm from '../modules/editTileHandler/loaders/loadTileToToggleForm.js';

// Updaters
import updateToggleTile from '../modules/editTileHandler/updaters/updateToggleTile.js';

const editTileHandler = () => {
	const urlSearch = {};

	window.location.search
		.split('?')[1]
		.split('&')
		.forEach(each => {
			let keyValue = each.split('=');
			urlSearch[keyValue[0]] = keyValue[1];
		});

	// Form
	const editTileForm = document.querySelector('.form_tile');

	if (urlSearch.id === 'new' && !urlSearch.type) {
		alert('Tile type to add not found');
		window.location.href = '/index.html';
	} else if (urlSearch.id === 'new' && urlSearch.type) {
		if (urlSearch.type === 'toggle') {
			editTileForm.innerHTML = toggleTilePage;

			// Save button
			const tileFormSaveBtn = document.querySelector('.tile_save_btn');
			// Form message
			const editTileFormMsg = document.querySelector('.form_msg');

			editTileForm.addEventListener('keyup', () => {
				const validated = validateToggleTile(editTileForm);

				if (validated.errors) {
					editTileFormMsg.textContent = 'Please fill fields in red';
					editTileFormMsg.style.color = 'var(--color-error)';
					editTileFormMsg.style.display = 'block';
				} else {
					editTileFormMsg.style.display = 'none';
				}
			});

			tileFormSaveBtn.addEventListener('click', () => {
				const validated = validateToggleTile(editTileForm);

				if (!validated.errors) {
					editTileFormMsg.style.color = 'var(--color-text)';
					editTileFormMsg.textContent = 'Saving please wait';
					editTileFormMsg.style.display = 'block';

					validated.data.type = 'toggle';

					tileFormSaveBtn.disabled = true;

					const saved = saveTile(validated.data);

					if (!saved.error) {
						editTileFormMsg.style.color = 'var(--color-success)';
						editTileFormMsg.style.display = 'block';

						editTileFormMsg.textContent = `Tile saved`;
						window.location.href = '/index.html';
					} else {
						tileFormSaveBtn.disabled = false;
						editTileFormMsg.style.color = 'var(--color-error)';
						editTileFormMsg.style.display = 'block';

						editTileFormMsg.innerHTML = `<p>${saved.error}, <a href="/pages/main/editbroker.html?id=new">Click here to add broker</a></p>`;
					}

					editTileForm.reset();
				} else {
					editTileFormMsg.textContent = 'Please fill fields in red';
					editTileFormMsg.style.color = 'var(--color-error)';
					editTileFormMsg.style.display = 'block';
				}
			});
		} else if (false) {
			// For future to add more tile type
		}
	} else {
		const tile = getTileDetail(urlSearch.id);

		if (!tile) {
			alert("Tile not found, can't edit it");
			window.location.href = '/index.html';
		} else {
			if (tile.type === 'toggle') {
				editTileForm.innerHTML = toggleTilePage;
				loadTileToToggleForm(editTileForm, tile);

				editTileForm.addEventListener('keyup', () => {
					const validated = validateToggleTile(editTileForm);

					if (validated.errors) {
						editTileFormMsg.textContent = 'Please fill fields in red';
						editTileFormMsg.style.color = 'var(--color-error)';
						editTileFormMsg.style.display = 'block';
					} else {
						editTileFormMsg.style.display = 'none';
					}
				});

				// Save button
				const tileFormSaveBtn = document.querySelector('.tile_save_btn');
				// Form message
				const editTileFormMsg = document.querySelector('.form_msg');

				tileFormSaveBtn.addEventListener('click', () => {
					const validated = validateToggleTile(editTileForm);

					if (!validated.errors) {
						tileFormSaveBtn.disabled = true;
						editTileFormMsg.textContent = 'Saving please wait';
						editTileFormMsg.style.color = 'var(--color-text)';
						editTileFormMsg.style.display = 'block';

						validated.data.type = 'toggle';

						if (updateToggleTile(tile.id, validated.data)) {
							editTileFormMsg.style.color = 'var(--color-success)';
							editTileFormMsg.style.display = 'block';

							editTileFormMsg.textContent = `Tile saved`;

							window.location.href = '/index.html';
						}

						editTileForm.reset();
					} else {
						editTileFormMsg.textContent = 'Please fill fields in red';
						editTileFormMsg.style.color = 'var(--color-error)';
						editTileFormMsg.style.display = 'block';
					}
				});
			}
		}
	}
};

export default editTileHandler;
