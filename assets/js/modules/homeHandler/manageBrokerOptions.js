/*     Broker options
	========================= */

// Modules

const manageBrokerOptions = () => {
	const brokerOptionBtn = document.querySelector('.broker_area');
	const brokerChangeBtn = document.querySelectorAll('.broker_option');

	brokerOptionBtn.addEventListener('click', e => {
		document.querySelector('.broker_options').classList.toggle('is-hidden');
	});

	brokerChangeBtn.forEach(each => {
		each.addEventListener('click', e => {
			const brokers = JSON.parse(localStorage.getItem('brokers'));

			const newCurrentBrokerbrokers = brokers.filter(each => {
				return each.id === e.target.getAttribute('broker-id');
			})[0];

			localStorage.setItem(
				'currentBroker',
				JSON.stringify(newCurrentBrokerbrokers)
			);

			window.location.reload();
		});
	});
};

export default manageBrokerOptions;
