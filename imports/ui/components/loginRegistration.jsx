import React from 'react';

export const LoginRegistration = () => (
	<div className="col-xs-12 col-sm-8 col-sm-offset-2">
		<p>Enter your email address and password. If you have an account, you will be logged in, if you don't your account will be created for you.</p>
		<form id="login-registration">
			<div className="form-group">
				<input type="email" className="form-control" id="email" placeholder="Email"/>
			</div>
			<div className="form-group">
				<input type="password" className="form-control" id="password" placeholder="Password"/>
			</div>
			<button type="submit" className="btn btn-primary">Login</button>
		</form>
	</div>
)