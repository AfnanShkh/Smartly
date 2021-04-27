/*     Settings Page
	========================== */

// Modules
import uploadSettings from '../modules/settingsHandler/uploadSettings.js';
import downloadSettings from '../modules/settingsHandler/downloadSettings.js';

const settingsHandler = () => {
	const uploadSettingsDiv = document.querySelector('.upload-settings_div');
	const downloadSettingsDiv = document.querySelector('.download-settings_div');
	const uploadSettingsBtn = document.querySelector('.upload-settings_btn');
	const downloadSettingsBtn = document.querySelector('.download-settings_btn');

	uploadSettingsDiv.addEventListener('click', () => {
		document
			.querySelector('.modal_upload-settings-topic')
			.classList.toggle('is-hidden');
	});

	downloadSettingsDiv.addEventListener('click', () => {
		document
			.querySelector('.modal_download-settings-topic')
			.classList.toggle('is-hidden');
	});

	uploadSettingsBtn.addEventListener('click', () => {
		const uploadTopicInput = document.querySelector('#upload_topic');

		if (uploadTopicInput.value === '' || uploadTopicInput.value.length < 1) {
			alert('Enter a topic first');
		} else {
			const uploaded = uploadSettings(uploadTopicInput.value);

			if (uploaded) {
				document
					.querySelector('.modal_upload-settings-topic')
					.classList.add('is-hidden');

				alert('Uploaded now you can download settings on other devices');
			} else {
				alert('Cant upload maybe you dont have any broker added?');
			}
		}
	});

	downloadSettingsBtn.addEventListener('click', async () => {
		const downloadTopicInput = document.querySelector('#download_topic');

		if (
			downloadTopicInput.value === '' ||
			downloadTopicInput.value.length < 1
		) {
			alert('Enter a topic first');
		} else {
			downloadSettingsBtn.disabled = true;

			try {
				const res = await downloadSettings(downloadTopicInput.value);
				downloadSettingsBtn.disabled = false;
				document
					.querySelector('.modal_download-settings-topic')
					.classList.add('is-hidden');
				alert(res);
				window.location.reload();
			} catch (error) {
				downloadSettingsBtn.disabled = false;
				alert(error);
			}
		}
	});

	// Event listner to close (hide) elements
	document.querySelector('html').addEventListener('click', e => {
		// Remove modals
		if (
			!e.target.closest('.modal, .upload-settings_div, .download-settings_div')
		) {
			document
				.querySelector('.modal_upload-settings-topic')
				.classList.add('is-hidden');

			document
				.querySelector('.modal_download-settings-topic')
				.classList.add('is-hidden');
		}
	});
};

export default settingsHandler;
