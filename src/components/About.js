import React, {Component} from 'react';

class About extends Component {
				//<h1>title: {this.props.match.params.username}의 about입니다</h1>
	render() {
		return(
			<div>
				<h1>title: {this.props.username}의 about입니다</h1>
			</div>
		);
	}
}

export default About;