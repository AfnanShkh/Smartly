// Modules
import connectToMqttBroker from '../mqtt/connectToMqttBroker.js';

const uploadSettings = topic => {
	const tiles = JSON.parse(localStorage.getItem('tiles'));
	const brokers = JSON.parse(localStorage.getItem('brokers'));
	let currentBroker = JSON.parse(localStorage.getItem('currentBroker'));

	if (!brokers) {
		return false;
	} else if (!currentBroker) {
		currentBroker = brokers[0];
		localStorage.setItem('currentBroker', JSON.stringify(currentBroker));
	}

	const client = connectToMqttBroker(currentBroker);

	// Publish data with mqtt
	client.publish(
		topic,
		JSON.stringify({ smartly: true, tiles, brokers, currentBroker }),
		{
			qos: 1,
			retain: true
		}
	);

	return true;
};

export default uploadSettings;
