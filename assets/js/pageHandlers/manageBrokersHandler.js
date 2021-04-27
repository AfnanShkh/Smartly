/*     Manage brokers Page
	========================== */

// Modules
import loadAllBrokers from '../modules/manageBrokersHandler/loadAllBrokers.js';
import manageBrokersOptions from '../modules/manageBrokersHandler/manageBrokersOptions.js';

const manageBrokersHandler = () => {
	const brokersLoaded = loadAllBrokers();

	if (brokersLoaded) {
		manageBrokersOptions();
	}
};

export default manageBrokersHandler;
