var React = require('react')

var AddContactForm = require('./addContactForm.jsx')
var ContactInfo = require('./contactInfo.jsx')

var contactList = [];
module.exports = React.createClass ({
    showAddContactForm : function(e) {
        e.preventDefault()
        var addContactForm = document.getElementById('add-contact-form')
        var contactList = document.getElementById('contact-list')
        e.target.style.display = 'none'
        contactList.style.display = 'none'
        // addContactForm.childNodes.form.reset()
        addContactForm.style.display = 'block'
    },
    render : function() {
        return (
            <div>
                <a className="pull-right btn btn-success" id="add-contact-btn" href="#" role="button" onClick={this.showAddContactForm}>Add Contact</a>
                <AddContactForm />
                <table className="table table-hover" id="contact-list">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Action(s)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.contactList.map(function(info, i) {
                            return (
                                <ContactInfo info={info} key={'contact'+ i} />
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
})