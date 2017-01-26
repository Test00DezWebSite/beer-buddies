import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import { Dashboard } from '../../ui/components/beers/dashboard.jsx';

Meteor.startup( () => {
	render(
		<Router history={browserHistory}>
			<Route path="/" component={ Dashboard } />
		</Router>,
		document.getElementById('render-target')
	);
});