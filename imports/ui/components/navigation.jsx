import React from 'react';
import { IndexLink, Link, browserHistory } from 'react-router';

export class Navigation extends React.Component {
	logout(e) {
		e.preventDefault();
		Meteor.logout(function() {
			browserHistory.push('/login');
		});
	}

	render() {
		return (
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" href="#">Beer Buddies</a>
			    </div>

			    <div className="collapse navbar-collapse" id="main-nav">
			      <ul className="nav navbar-nav">
			        <li><IndexLink to="/" activeClassName="active">Dashboard</IndexLink></li>
			        <li><Link to="/beers/new">New Beer</Link></li>
					<li><a href="#" onClick={this.logout}>Logout</a></li>
			      </ul>
			    </div>
			  </div>
			</nav>
		)
	}
}