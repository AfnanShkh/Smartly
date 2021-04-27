const loadAllBrokers = () => {
	const brokers = JSON.parse(localStorage.getItem('brokers'));
	const currentBroker = JSON.parse(localStorage.getItem('currentBroker'));

	// Elements
	const UiAllBrokersArea = document.querySelector('.manage-brokers_area');

	if (!brokers) {
		if (currentBroker) {
			localStorage.removeItem('currentBroker');
		}

		UiAllBrokersArea.innerHTML = `<p>No brokers added, to add one click below</p>`;

		return false;
	} else {
		let html = '';

		brokers.forEach(each => {
			html += `
      <div broker-id="${each.id}" class="manage-brokers_item">
        <p class="manage-brokers_title">${each.title}</p>
        <div class="manage-brokers_options">
          <img
          broker-id="${each.id}"
          this-option="edit"
          class="manage-brokers_option-icon"
          src="/assets/icons/app/settings/manage-brokers_edit.svg"
          />
          <img
          broker-id="${each.id}"
          this-option="delete"
          class="manage-brokers_option-icon manage-brokers_option-icon--delete"
          src="/assets/icons/app/settings/manage-brokers_delete.svg"
          />
        </div>
      </div>
      `;
		});

		UiAllBrokersArea.innerHTML = html;

		return true;
	}
};

export default loadAllBrokers;
