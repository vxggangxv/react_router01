import React, {Component} from 'react';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Posts from './Posts';
import Login from './Login';
import NonUrl from './NonUrl';

class App extends Component {
    render(){

						//<Route path="/about/:username" component={About} />
        return (
			<Router>
				<div>
					<Header />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/posts" component={Posts} />
						<Route path="/login" component={Login} />
						<Route component={NonUrl} />
					</Switch>
				</div>
			</Router>
        );
    }
}

export default App;