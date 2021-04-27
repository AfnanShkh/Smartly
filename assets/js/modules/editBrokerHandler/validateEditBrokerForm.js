/*     Validate edit broker form
  ================================= */

const validateEditBrokerForm = editBrokerForm => {
	// Inputs
	const title = editBrokerForm.title;
	const brokerUrl = editBrokerForm.broker_url;
	const brokerPort = editBrokerForm.broker_port;
	const brokerUsername = editBrokerForm.broker_username;
	const brokerPassword = editBrokerForm.broker_password;
	const qos = editBrokerForm.qos;

	let errors = 0;

	// Domain patter
	const domainPattern = /[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

	if (title.value.length < 2 || title.value.length > 15) {
		errors++;
		title.style.borderColor = 'var(--color-error)';
	} else {
		title.style.borderColor = 'var(--color-success)';
	}

	if (brokerUrl.value.length < 3 || !domainPattern.test(brokerUrl.value)) {
		errors++;
		brokerUrl.style.borderColor = 'var(--color-error)';
	} else {
		brokerUrl.style.borderColor = 'var(--color-success)';
	}

	if (brokerPort.value <= 0 || brokerPort.value.length > 14) {
		errors++;
		brokerPort.style.borderColor = 'var(--color-error)';
	} else {
		brokerPort.style.borderColor = 'var(--color-success)';
	}

	if (brokerUsername.value.length > 160) {
		errors++;
		brokerUsername.style.borderColor = 'var(--color-error)';
	} else {
		brokerUsername.style.borderColor = 'var(--color-success)';
	}

	if (brokerPassword.value.length > 160) {
		errors++;
		brokerPassword.style.borderColor = 'var(--color-error)';
	} else {
		brokerPassword.style.borderColor = 'var(--color-success)';
	}

	if ((qos.value.length > 0 && qos.value > 2) || qos.value < 0) {
		errors++;
		qos.style.borderColor = 'var(--color-error)';
	} else {
		qos.style.borderColor = 'var(--color-success)';
	}

	let data = {
		title: title.value,
		url: brokerUrl.value,
		port: brokerPort.value,
		username: brokerUsername.value,
		password: brokerPassword.value,
		qos: qos.value
	};

	return {
		errors,
		data
	};
};

export default validateEditBrokerForm;
