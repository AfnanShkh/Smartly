/*     Save broker
  ===================== */

// Modules
import randomString from '../common/randomString.js';

const saveBroker = data => {
	data.qos === '' ? (data.qos = 1) : Number(data.qos);
	Number(data.port);

	data.id = randomString(20);

	if (!localStorage.getItem('brokers')) {
		const brokers = [];

		brokers.push(data);

		localStorage.setItem('brokers', JSON.stringify(brokers));
	} else {
		const brokers = JSON.parse(localStorage.getItem('brokers'));

		brokers.push(data);

		localStorage.setItem('brokers', JSON.stringify(brokers));
	}

	localStorage.setItem('currentBroker', JSON.stringify(data));

	return true;
};

export default saveBroker;
