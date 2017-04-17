var React = require('react')

module.exports = React.createClass ({
    getInitialState : function () {
        return {
            name: '',
            number: ''
        }
    },
    addContact : function(e) {
        e.preventDefault()
        var addContactBtn = document.getElementById('add-contact-btn')
        var addContactForm = document.getElementById('add-contact-form')
        // TODO
        // store the contact details and render contact list
        addContactForm.style.display = 'none'
        addContactBtn.style.display = 'inline-block'
    },
    showAddContactForm : function(e) {
        e.preventDefault()
        e.target.style.display = 'none'
        var addContactForm = document.getElementById('add-contact-form')
        // addContactForm.childNodes.form.reset()
        addContactForm.style.display = 'block'
    },

    render : function() {
        return (
            <div>
                <a className="btn btn-success" id="add-contact-btn" href="#" role="button" onClick={this.showAddContactForm}>Add Contact</a>
                <form id="add-contact-form" action="" onSubmit={this.addContact} style={{display: 'none'}}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input type="text" className="form-control" id="mobile" placeholder="Mobile" />
                    </div>
                    <button type="submit" className="btn btn-default">Add Contact</button>
                </form>
            </div>
        )
    }
})