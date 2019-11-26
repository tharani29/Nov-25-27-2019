import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Lab02 from './Lab02';

class App extends React.Component {
	
	render() {
	    return (
	      <div className="App">
	        <Header/>
			<br/>
			<hr/>
			<Lab02/>
	      </div>
	    );		
	}

}

export default App;
