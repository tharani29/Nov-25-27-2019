import React, { Component } from 'react';

class MyForm extends Component {
	constructor(props) {
		super(props);
		this.state = { name: "", message: ""}	
	}	
	
	textChanged(e) {
		this.setState({ name: e.target.value.trim() });
	}
	
	buttonClicked() {
		this.setState({
			message: `Hi ${this.state.name}`
		})
	}
	
  render() {
    return (<div>
		<input type="text" onChange={this.textChanged.bind(this)} placeholder="Name"/>
		<br/>
    	<button onClick={this.buttonClicked.bind(this)}>Click</button>
		<h3>{this.state.message}</h3>
	</div>);
  }
}

export default MyForm;
