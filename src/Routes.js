import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Examples from './components/pages/Examples';

class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/examples' component={Examples} />
				<Route
					render={() => {
						return <>Not Found</>;
					}}
				/>
			</Switch>
		);
	}
}

export default Routes;
