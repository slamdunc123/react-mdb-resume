import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './index.css';
import Routes from './Routes';

class App extends Component {
	render() {
		return (
			<Router>
				<Navbar />
				<Routes />
			</Router>
		);
	}
}

export default App;
