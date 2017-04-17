var dispatcher = require("./dispatcher");

module.exports = {
	addContact: function (contact) {
		dispatcher.dispatch({
			contact: contact,
			type: "addressBook:addContact"
		});
	},
	deleteContact: function (contact) {
		dispatcher.dispatch({
			contact: contact,
			type: "addressBook:deleteContact"
		});
	}
}