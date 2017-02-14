import React from 'react';
import { Navigation } from '../components/navigation.jsx';
import { LoggedOutNavigation } from '../components/loggedOutNavigation.jsx';

export const App = ( { children } ) => (
	<div className="container">
		{Meteor.userId() ? <Navigation /> : <LoggedOutNavigation />}
		{ children }
	</div>
)