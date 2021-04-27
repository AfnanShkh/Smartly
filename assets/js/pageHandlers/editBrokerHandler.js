/*     Edit Broker Page
	========================= */

// Modules
import validateEditBrokerForm from '../modules/editBrokerHandler/validateEditBrokerForm.js';
import saveBroker from '../modules/editBrokerHandler/saveBroker.js';
import updateBroker from '../modules/editBrokerHandler/updateBroker.js';
import getBrokerDetail from '../modules/editBrokerHandler/getBrokerDetail.js';
import loadBrokerToForm from '../modules/editBrokerHandler/loadBrokerToForm.js';

const editBrokerHandler = () => {
	const urlSearch = {};

	window.location.search
		.split('?')[1]
		.split('&')
		.forEach(each => {
			let keyValue = each.split('=');
			urlSearch[keyValue[0]] = keyValue[1];
		});

	// Save button
	const brokerFormSaveBtn = document.querySelector('.broker_save_btn');
	// Form
	const editBrokerForm = document.querySelector('.form_broker');
	// Form message
	const editBrokerFormMsg = document.querySelector('.form_msg');

	if (urlSearch.id === 'new') {
		editBrokerForm.addEventListener('keyup', () => {
			validateEditBrokerForm(editBrokerForm);
		});

		brokerFormSaveBtn.addEventListener('click', () => {
			const validated = validateEditBrokerForm(editBrokerForm);

			if (!validated.errors) {
				brokerFormSaveBtn.disabled = true;
				editBrokerFormMsg.textContent = 'Saving please wait';
				editBrokerFormMsg.style.color = 'var(--color-text)';
				editBrokerFormMsg.style.display = 'block';

				if (saveBroker(validated.data)) {
					editBrokerFormMsg.style.color = 'var(--color-success)';
					editBrokerFormMsg.style.display = 'block';

					editBrokerFormMsg.textContent = `Broker saved`;

					window.location.href = '/pages/main/managebrokers.html';
				}

				editBrokerForm.reset();
			} else {
				editBrokerFormMsg.textContent = 'Please fill fields in red';
				editBrokerFormMsg.style.color = 'var(--color-error)';
				editBrokerFormMsg.style.display = 'block';
			}
		});
	} else {
		const broker = getBrokerDetail(urlSearch.id);

		if (!broker) {
			alert("Broker not found, can't edit it");
			window.location.href = '/pages/main/managebrokers.html';
		} else {
			loadBrokerToForm(editBrokerForm, broker);

			editBrokerForm.addEventListener('keyup', () => {
				validateEditBrokerForm(editBrokerForm);
			});

			brokerFormSaveBtn.addEventListener('click', () => {
				const validated = validateEditBrokerForm(editBrokerForm);

				if (!validated.errors) {
					brokerFormSaveBtn.disabled = true;
					editBrokerFormMsg.textContent = 'Saving please wait';
					editBrokerFormMsg.style.color = 'var(--color-text)';
					editBrokerFormMsg.style.display = 'block';

					if (updateBroker(broker.id, validated.data)) {
						editBrokerFormMsg.style.color = 'var(--color-success)';
						editBrokerFormMsg.style.display = 'block';

						editBrokerFormMsg.textContent = `Broker saved`;

						window.location.href = '/pages/main/managebrokers.html';
					}

					editBrokerForm.reset();
				} else {
					editBrokerFormMsg.textContent = 'Please fill fields in red';
					editBrokerFormMsg.style.color = 'var(--color-error)';
					editBrokerFormMsg.style.display = 'block';
				}
			});
		}
	}
};

export default editBrokerHandler;
