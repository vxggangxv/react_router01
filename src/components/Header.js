import React, {Component} from 'react';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styles from './Header.css';
//import './Header.css';

class Header extends Component {
	render() {
		return(
			<div className={styles.header}>
				<Link to="/" className={styles.item}>home</Link><br/>
				<Link to="/about/Jun" className={styles.item}>소개</Link><br/>
				<Link to="/posts" className={styles.item}>포스트</Link><br/>
				<Link to="/login" className={styles.item}>로그인</Link><br/>
			</div>
		);
	}
}

export default Header;