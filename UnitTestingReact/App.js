import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Footer from './Footer';
import MyForm from './MyForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome/>
		<br/><br/><br/><br/>
		<MyForm/>
		<br/><br/><hr/>
		<Footer year="2018"/>
      </div>
    );
  }
}

export default App;
