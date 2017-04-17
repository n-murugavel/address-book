var dispatcher = require("./dispatcher");

function ABStore() {
	var listeners = [];
	var contacts = [{
		name: 'Murugavel',
		mobile: '8754549169'
	}, {
		name: 'Meyyeppan',
		mobile: '9841504849'
	}];

	function getContacts() {
		return contacts;
	}

	function onChange(listener) {
		listeners.push(listener);
	}

	function addContact(contact) {
		contacts.push(contact)
		triggerListeners();
	}

	function deleteContact(contact) {
		var _i;
		contacts.map(function (c, i) {
			if (contact.name === c.name) {
				_i = i;
			}
		});
		contacts.splice(_i, 1);
		triggerListeners();
	}

	function triggerListeners() {
		listeners.forEach(function (listener) {
			listener(contacts);
		});
	}

	dispatcher.register(function (payload) {
		var split = payload.type.split(":");
		if (split[0] === "addressBook") {
			switch (split[1]) {
				case "addContact":
					addContact(payload.contact);
					break;
				case "deleteContact":
					deleteContact(payload.contact);
					break;
			}
		}
	});

	return {
		getContacts: getContacts,
		onChange: onChange
	}
}

module.exports = ABStore();