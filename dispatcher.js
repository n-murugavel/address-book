var Uuid = require("uuid/v1");

var listeners = {};

function dispatch(payload) {
	for (var id in listeners) {
		listeners[id](payload);
	}
}

function register(cb) {
	var id = Uuid();
	listeners[id] = cb;
}

module.exports = {
	register: register,
	dispatch: dispatch
}