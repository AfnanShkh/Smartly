/*     Validate toggle tile
  ============================= */

const validateToggleTile = editTileForm => {
	// Inputs
	const title = editTileForm.title;
	const pubTopic = editTileForm.pub_topic;
	const subTopic = editTileForm.sub_topic;
	const retained = editTileForm.retained;
	const qos = editTileForm.qos;
	const onValue = editTileForm.on_value;
	const offValue = editTileForm.off_value;

	let errors = 0;

	// Valitation
	if (title.value.length < 2 || title.value.length > 15) {
		errors++;
		title.style.borderColor = 'var(--color-error)';
	} else {
		title.style.borderColor = 'var(--color-success)';
	}

	if (pubTopic.value.length < 1 || pubTopic.value.length > 70) {
		errors++;
		pubTopic.style.borderColor = 'var(--color-error)';
	} else {
		pubTopic.style.borderColor = 'var(--color-success)';
	}

	if (subTopic.value.length < 1 || subTopic.value.length > 70) {
		errors++;
		subTopic.style.borderColor = 'var(--color-error)';
	} else {
		subTopic.style.borderColor = 'var(--color-success)';
	}

	if (retained) {
		retained.parentElement.style.borderColor = 'var(--color-success)';
	}

	if ((qos.value.length > 0 && qos.value > 2) || qos.value < 0) {
		errors++;
		qos.style.borderColor = 'var(--color-error)';
	} else {
		qos.style.borderColor = 'var(--color-success)';
	}

	if (onValue.value.length < 1) {
		errors++;
		onValue.style.borderColor = 'var(--color-error)';
	} else {
		onValue.style.borderColor = 'var(--color-success)';
	}

	if (offValue.value.length < 1) {
		errors++;
		offValue.style.borderColor = 'var(--color-error)';
	} else {
		offValue.style.borderColor = 'var(--color-success)';
	}

	let data = {
		title: title.value,
		pubTopic: pubTopic.value,
		subTopic: subTopic.value,
		retained: retained.checked,
		qos: qos.value,
		onValue: onValue.value,
		offValue: offValue.value
	};

	return {
		errors,
		data
	};
};

export default validateToggleTile;
