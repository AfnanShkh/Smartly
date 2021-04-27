// Modules
import connectToMqttBroker from '../mqtt/connectToMqttBroker.js';

const downloadSettings = topic => {
	return new Promise((resolve, reject) => {
		const brokers = JSON.parse(localStorage.getItem('brokers'));
		let currentBroker = JSON.parse(localStorage.getItem('currentBroker'));

		if (!brokers) {
			reject('Add the broker you used to upload settings');
		} else if (!currentBroker) {
			currentBroker = brokers[0];
			localStorage.setItem('currentBroker', JSON.stringify(currentBroker));
		}

		const client = connectToMqttBroker(currentBroker);

		client.subscribe(topic, {
			qos: 1,
			rap: true
		});

		client.on('message', (msgTopic, msg) => {
			const message = JSON.parse(msg.toString());

			if (msgTopic === topic) {
				if (message.smartly) {
					localStorage.setItem('tiles', JSON.stringify(message.tiles));
					localStorage.setItem('brokers', JSON.stringify(message.brokers));
					localStorage.setItem(
						'currentBroker',
						JSON.stringify(message.currentBroker)
					);
					console.log(topic, message);
					resolve('Settings saved');
				} else {
					reject(
						'Uploaded data maybe edited or corrupted, try uploading the settings again'
					);
				}
			}
		});

		setTimeout(() => {
			reject(
				'No data recieved on this topic, maybe wrng topic or problem connecting to broker. Check topic and broker settings'
			);
		}, 10000);
	});
};

export default downloadSettings;
