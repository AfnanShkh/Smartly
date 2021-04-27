/*     Load broker to form
  ============================== */

const loadBrokerToForm = (editBrokerForm, data) => {
	// Inputs
	const title = editBrokerForm.title;
	const url = editBrokerForm.broker_url;
	const port = editBrokerForm.broker_port;
	const username = editBrokerForm.broker_username;
	const password = editBrokerForm.broker_password;
	const qos = editBrokerForm.qos;

	title.value = data.title;
	url.value = data.url;
	port.value = data.port;
	username.value = data.username;
	password.value = data.password;
	qos.value = data.qos;
};

export default loadBrokerToForm;
