const loadTileToToggleForm = (editTileForm, data) => {
	// Inputs
	const title = editTileForm.title;
	const pubTopic = editTileForm.pub_topic;
	const subTopic = editTileForm.sub_topic;
	const retained = editTileForm.retained;
	const qos = editTileForm.qos;
	const onValue = editTileForm.on_value;
	const offValue = editTileForm.off_value;

	title.value = data.title;
	pubTopic.value = data.pubTopic;
	subTopic.value = data.subTopic;
	retained.checked = data.retained;
	qos.value = data.qos;
	onValue.value = data.onValue;
	offValue.value = data.offValue;
};

export default loadTileToToggleForm;
