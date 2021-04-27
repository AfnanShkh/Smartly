/*     Toggle tile loader
  ============================ */

// This function also subscribe to topics
const toggleTileLoaders = (tile, UiTiles) => {
	const currentTile = `
  <div
    tile-id="${tile.id}"
    tile-type="${tile.type}"
    class="broker_tile broker_tile--toggle"
  >
    <span
      tile-id="${tile.id}"
      tile-type="${tile.type}"
      class="broker_tile_status"
    ></span>
    <p tile-id="${tile.id}" tile-type="${tile.type}" class="broker_tile_title">
      ${tile.title}
    </p>
    <p
      tile-id="${tile.id}"
      tile-type="${tile.type}"
      class="broker_tile_sub-title"
    >Getting info...</p>
    <img
      src="/assets/icons/app/home/broker-tile-option.svg"
      class="broker_tile_option-icon"
    />

    <!-- Tile options -->
    <div class="tile_options is-hidden">
      <div this-option="edit" class="tile_option">
        <img
          class="tile_option_icon"
          src="/assets/icons/app/home/tile-edit.svg"
        />
        <p class="tile_option_text">Edit</p>
      </div>
      <div this-option="delete" class="tile_option">
        <img
          class="tile_option_icon"
          src="/assets/icons/app/home/tile-delete.svg"
        />
        <p class="tile_option_text tile_option_icon--error">Delete</p>
      </div>
      <div this-option="duplicate" class="tile_option">
        <img
          class="tile_option_icon"
          src="/assets/icons/app/home/tile-duplicate.svg"
        />
        <p class="tile_option_text tile_option_icon--duplicate">Duplicate</p>
      </div>
    </div>
  </div>
  `;

	UiTiles.innerHTML += currentTile;
};

export default toggleTileLoaders;
