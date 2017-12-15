import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {
	isLogin = false;
	render() {
		return(
			<div>
				{
					!this.isLogin && <Redirect to='/' />
				}
			</div>
		);
	}
}

export default Login;