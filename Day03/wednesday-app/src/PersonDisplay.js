import React from 'react';

class PersonDisplay extends React.Component {
	constructor(props) {
		super(props);
	}
	
	toggleRemoveCheckbox(name) {
		this.props.togglePersonForRemovalHandler(name);
	}
	
	getPersonRows() {
		let { persons } = this.props;
		let rows = persons.map(it => (<tr key={it.name}>
			<td>{it.name}</td>
			<td>{it.country}</td>
			<td><input type="checkbox" onChange={this.toggleRemoveCheckbox.bind(this, it.name)}/></td>
		</tr>))
		return rows;
	}	
	
	removePersonsButtonClicked() {
		this.props.removePersonsHandler();
	}
	
	render() {
		let { persons } = this.props;
		if(persons.length > 0) {
			return (<div>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Country</th>
							<th>Select</th>
						</tr>
					</thead>
					<tbody>
							{this.getPersonRows()}
					</tbody>	
				</table>
				<br/>
				<button onClick={this.removePersonsButtonClicked.bind(this)}>Remove</button>						
			</div>);
			
		}
		else {
			return null;
		}
	}
}
export default PersonDisplay;
