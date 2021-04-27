// Modules
import deleteBroker from '../editBrokerHandler/deleteBroker.js';

const manageBrokersOptions = () => {
	const manageBrokersOptions = document.querySelectorAll(
		'.manage-brokers_option-icon'
	);

	manageBrokersOptions.forEach(each => {
		each.addEventListener('click', e => {
			const action = e.target.getAttribute('this-option');
			const brokerId = e.target.getAttribute('broker-id');

			if (action === 'edit') {
				window.location.href = `/pages/main/editbroker.html?id=${brokerId}`;
			} else if (action === 'delete') {
				if (
					confirm(
						'Attention: THIS ACTION IS NOT REVERSIBLE, Do you really want to delete this broker? It will also delete all its tiles'
					)
				) {
					deleteBroker(brokerId);
				}
			}
		});
	});
};

export default manageBrokersOptions;
