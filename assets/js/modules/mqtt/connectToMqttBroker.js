import randomString from '../common/randomString.js';

const connectToMqttBroker = currentBroker => {
	let client;

	if (currentBroker.username === '' || !currentBroker.username) {
		client = mqtt.connect(`wss://${currentBroker.url}`, {
			port: currentBroker.port,
			keepalive: 60,
			protocolId: 'MQTT',
			reconnectPeriod: 1000,
			clientId: randomString(30)
		});
	} else {
		client = mqtt.connect(`wss://${currentBroker.url}`, {
			port: currentBroker.port,
			keepalive: 60,
			password: currentBroker.password,
			protocolId: 'MQTT',
			reconnectPeriod: 1000,
			clientId: randomString(30),
			username: currentBroker.username
		});
	}

	return client;
};

export default connectToMqttBroker;
