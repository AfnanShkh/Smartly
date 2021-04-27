/*     Update broker
  ===================== */

const updateBroker = (id, newData) => {
	const brokers = JSON.parse(localStorage.getItem('brokers'));

	const indexOfBroker = brokers.findIndex(each => {
		return each.id === id;
	});

	brokers[indexOfBroker].title = newData.title;
	brokers[indexOfBroker].url = newData.url;
	brokers[indexOfBroker].port = newData.port;
	brokers[indexOfBroker].username = newData.username;
	brokers[indexOfBroker].password = newData.password;
	brokers[indexOfBroker].qos = newData.qos;

	localStorage.setItem('brokers', JSON.stringify(brokers));
	localStorage.setItem('currentBroker', JSON.stringify(brokers[0]));

	return true;
};

export default updateBroker;
