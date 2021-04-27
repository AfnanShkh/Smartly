const toggleTileSubHandler = (tiles, client) => {
	const UiToggleTilesStatus = document.querySelectorAll('.broker_tile_status');
	const UiToggleTilesTime = document.querySelectorAll('.broker_tile_sub-title');
	const timeChanger = [];

	client.on('message', (topic, msg) => {
		const message = msg.toString();

		UiToggleTilesStatus.forEach((each, i) => {
			if (each.getAttribute('tile-id') === tiles[i].id) {
				if (tiles[i].subTopic === topic) {
					if (message === tiles[i].onValue) {
						each.style.backgroundColor = 'var(--color-success)';
						each.parentElement.setAttribute('current-state', 'on');
					} else if (message === tiles[i].offValue) {
						each.style.backgroundColor = 'var(--color-error)';
						each.parentElement.setAttribute('current-state', 'off');
					} else {
						each.style.backgroundColor = 'var(--color-prim)';
						each.parentElement.setAttribute('current-state', 'null');
					}
				}
			}
		});

		UiToggleTilesTime.forEach((each, i) => {
			if (each.getAttribute('tile-id') === tiles[i].id) {
				if (tiles[i].subTopic === topic) {
					const timerToClear = timeChanger.filter(each => {
						return each.id === tiles[i].id;
					});

					if (timerToClear) {
						timerToClear.forEach(each => {
							clearInterval(each.timer);
						});
					}

					let timer = 0;

					timeChanger.push({
						timer: setInterval(() => {
							if (timer >= 60) {
								each.textContent = `${Math.floor(timer / 60)} Minutes ago`;
							} else {
								each.textContent = `${timer} Seconds ago`;
							}

							timer++;
						}, 1000),
						id: tiles[i].id
					});
				}
			}
		});
	});
};

export default toggleTileSubHandler;
