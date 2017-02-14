import React from 'react';
import { IndexLink, Link } from 'react-router';

export const LoggedOutNavigation = () => (
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
			<li><Link to="/login" activeClassName="active">Login/Register</Link></li>
	      </ul>
	    </div>
	  </div>
	</nav>
)