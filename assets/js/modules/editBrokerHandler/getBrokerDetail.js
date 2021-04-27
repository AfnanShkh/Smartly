/*     Get broker
  ===================== */

const getBrokerDetail = id => {
	const brokers = JSON.parse(localStorage.getItem('brokers'));

	const found = brokers.find(each => {
		return each.id === id;
	});

	return found;
};

export default getBrokerDetail;
