import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

class Post extends Component {
	render() {
		return(
			<div>
				<p>title: {this.props.match.params.title}</p>
				<p>id: {new URLSearchParams(this.props.location.search).get('id')}</p>
			</div>
		);
	}
}

class Posts extends Component {
	render() {
		return(
			<div>
				<p>포스트</p>
				<Link to='/posts/first?id=1'>first</Link><br/>
				<Link to='/posts/second?id=2'>second</Link><br/>
				<Link to='/posts/third?id=3'>third</Link><br/>
				<Route path='/posts/:title' component={Post} />
			
			</div>
		);
	}
}

export default Posts;