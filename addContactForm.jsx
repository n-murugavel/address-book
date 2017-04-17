var React = require('react')

var abActions = require('./addressBookActions')

module.exports = React.createClass ({
    getInitialState : function () {
        return {
            name: '',
            mobile: ''
        }
    },
    addContact : function(e) {
        e.preventDefault()
        var addContactBtn = document.getElementById('add-contact-btn')
        var contactList = document.getElementById('contact-list')
        var addContactForm = document.getElementById('add-contact-form')
        // TODO
        // store the contact details and render contact list
		abActions.addContact(this.state);

        addContactForm.style.display = 'none'
        // TODO
        // reset form input fields

        addContactBtn.style.display = 'inline-block'
        contactList.style.display = 'table'
    },
    handleOnChange : function(e) {
        e.preventDefault()
        var _t = e.target;
        var prevState = this.state;
        prevState[_t.id] = _t.value;
        this.setState(prevState);
    },
    render : function() {
        return (
            <form id="add-contact-form" action="" onSubmit={this.addContact} style={{display: 'none'}}>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input type="text" className="form-control" id="name" placeholder="Name" value={this.state.name} onChange={this.handleOnChange} />
				</div>
				<div className="form-group">
					<label htmlFor="mobile">Mobile</label>
					<input type="text" className="form-control" id="mobile" placeholder="Mobile" value={this.state.mobile} onChange={this.handleOnChange} />
				</div>
				<button type="submit" className="btn btn-default">Add Contact</button>
			</form>
        )
    }
})