import React from 'react';
import { browserHistory } from 'react-router';

export default class LoginRegistration extends React.Component {
	submitForm(e) {
		e.preventDefault();

		const email = $('#email').val().trim();
		const password = $('#password').val().trim();		

		Accounts.createUser(
			{
				email: email,
				password: password
			},
			function(error) {
				if (error.reason === 'Email already exists.') {
					Meteor.loginWithPassword(email, password, function(e) {
						if (e) {
							alert('Please fix the following: ' + e.reason);
						} else {
							browserHistory.push('/');
						}
					});
				} else {
					if (error) {
					alert('Please fix the following: ' + error.reason);
				} else {
					browserHistory.push('/');
				}
				}
			}
		);
	}

	render() {
		return (
			<div className="col-xs-12 col-sm-8 col-sm-offset-2">
				<p>Enter your email address and password. If you have an account, you will be logged in, if you don't your account will be created for you.</p>
				<form id="login-registration" onSubmit={this.submitForm}>
					<div className="form-group">
						<input type="email" className="form-control" id="email" placeholder="Email"/>
					</div>
					<div className="form-group">
						<input type="password" className="form-control" id="password" placeholder="Password"/>
					</div>
					<button type="submit" className="btn btn-primary">Login</button>
				</form>
			</div>
		);
	}
}