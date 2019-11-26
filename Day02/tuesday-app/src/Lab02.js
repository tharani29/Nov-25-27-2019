import React from 'react';


class Lab02 extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			countries: [],
			countrySelected: ''
		}
		this.countryChanged = this.countryChanged.bind(this);
	}
	
	componentDidMount() {
		let { countries } = this.state;
		if(countries.length == 0) {
			//ideally send ajax request to the server and fetch
			countries = [
				{ name: "India", cities: ["Chennai", "Pune", "Kochi"] },
				{ name: "US", cities: ["Houston", "NYC", "NJ"] },
				{ name: "UK", cities: ["London", "Essex", "Scotland"] }
			];
			this.setState({ countries })
		}
	}
	
	populateCountryList() {
		let { countries } = this.state;
		let options = countries.map(item => <option key={item.name}>{item.name}</option>);
		return options;
	}
	
	loadCityList() {
		let { countries, countrySelected } = this.state;
		let options = [];
		if(countries.length > 0 && countrySelected != '' && countrySelected != '--SELECT--') {
			let citiesInSelectedCountry = countries
				.find(it => it.name == countrySelected).cities;
				options = citiesInSelectedCountry.map(it => <option key={it}>{it}</option>);		

		}
		return options;
		
	}
	
	countryChanged(e) {
		this.setState({ countrySelected: e.target.value });
	}
	
	render() {
	    return (<div>
	 			 Country <select onChange={this.countryChanged}>
						<option>--SELECT--</option>
						{ this.populateCountryList() }
					</select>
				<br/>
				City <select>
						{ this.loadCityList() }
					</select>
		</div>);		
	}

}

export default Lab02;
