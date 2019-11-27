import React, { lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import Lab02 from './Lab02';

const Header = lazy(() => import('./Header'))


const renderLoader = () => <p>Loading</p>;

class App extends React.Component {
	
	render() {
	    return (
	      <div className="App">
			<div>
				<Suspense fallback={renderLoader()}>
					<Header/>
				</Suspense>
			</div>
			<br/>
			<hr/>
			<Lab02/>
	      </div>
	    );		
	}

}

export default App;