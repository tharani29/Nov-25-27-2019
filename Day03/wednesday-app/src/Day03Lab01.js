import React from 'react';
import PersonForm from './PersonForm';
import PersonDisplay from './PersonDisplay';

class Day03Lab01 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			persons: []	
		}
		this.addPerson = this.addPerson.bind(this);
		this.togglePersonForRemoval = this.togglePersonForRemoval.bind(this);
		this.removePersons = this.removePersons.bind(this);
	}
	
	removePersons() {
		let { persons } = this.state;
		persons = persons.filter(it => !it.markedForRemoval);
		this.setState({ persons });
	}
	
	togglePersonForRemoval(personToRemove) {
		let { persons } = this.state;
		let person = persons.find(it => it.name === personToRemove);
		person.markedForRemoval = !person.markedForRemoval;
	}
	
	addPerson(name, country) {
		let { persons } = this.state;
		let person = { name, country, markedForRemoval: false }
		if(!persons.find(it => it.name === name)) {
			persons.push(person);
			this.setState({ persons })
			return "Person added successfully";
		}
		else {
			return "Person already found";
		}
	}
	
	render() {
		return (<div>
			<PersonForm addPersonHandler={ this.addPerson }/>
			<hr/>
			<PersonDisplay persons={ this.state.persons } 
					removePersonsHandler={this.removePersons}
					togglePersonForRemovalHandler={this.togglePersonForRemoval}/>
		</div>);
	}
}
export default Day03Lab01;
