var React = require('react')

var abActions = require('./addressBookActions')

module.exports = React.createClass ({
	deleteContact : function(e) {
		e.preventDefault()
		// TODO
		// delete contact from address book
		abActions.deleteContact(this.props.info)
	},
	render : function() {
		return (
			<tr>
				<td>{this.props.info.name}</td>
				<td>{this.props.info.mobile}</td>
				<td><a className="btn btn-danger" href="#" onClick={this.deleteContact}>Delete</a></td>
			</tr>
        )
    }
})