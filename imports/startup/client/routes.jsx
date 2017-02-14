import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App } from '../../ui/layouts/app.jsx';
import { Dashboard } from '../../ui/components/beers/dashboard.jsx';
import LoginRegistration from  '../../ui/components/loginRegistration.jsx';

Meteor.startup( () => {
	render(
		<Router history={browserHistory}>
			<Route path="/" component={ App }>
				{Meteor.userId() ? <IndexRoute component={ Dashboard } /> : <IndexRoute component={ LoginRegistration } /> }
				<Route path="/login" component={ LoginRegistration } />
			</Route>
		</Router>,
		document.getElementById('render-target')
	);
});