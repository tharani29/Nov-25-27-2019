import React from 'react';

class PersonForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "", country: "", message: ""
		}
	}
	
	nameChanged(e) {
		this.setState({ name: e.target.value });
	}
	
	countryChanged(e) {
		this.setState({ country: e.target.value });
	}
	
	addPersonButtonClicked() {
		let { name, country } = this.state;
		let message = this.props.addPersonHandler(name, country);
		this.setState({ message });
	}
	
	render() {
		return (<div>
			Name <input type="text" onChange={this.nameChanged.bind(this)}/>
			<br/>
			Country <select onChange={this.countryChanged.bind(this)}>
							<option>--SELECT--</option>
							<option>India</option>
							<option>US</option>
							<option>France</option>
					</select>
			<br/>
			<button onClick={this.addPersonButtonClicked.bind(this)}>Add Person</button>
			<h1>{ this.state.message }</h1>
		</div>);
	}
}
export default PersonForm;
