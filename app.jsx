var React = require('react')
var ReactDOM = require('react-dom')
var AddressBook = require('./addressBook.jsx')
var addressBookStore = require('./addressBookStore');

var contacts = addressBookStore.getContacts();
addressBookStore.onChange(function(data){
    contacts = data;
    render();
});

function render () {
	ReactDOM.render(<AddressBook contactList={contacts} />, document.getElementById('container'));
}

render();