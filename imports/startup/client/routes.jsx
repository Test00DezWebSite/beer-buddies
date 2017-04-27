import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { App } from '../../ui/layouts/app.jsx';
import { Dashboard } from '../../ui/components/beers/dashboard.jsx';
import LoginRegistration from  '../../ui/components/loginRegistration.jsx';
import NewBeer from '../../ui/pages/NewBeer.js';
import Beers from '../../ui/pages/Beers.js';
import ViewBeer from '../../ui/containers/ViewBeer.js';

const authenticate = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup( () => {
	render(
		<Router history={browserHistory}>
			<Route path="/" component={ App }>
				{Meteor.userId() ? <IndexRoute component={ Dashboard } /> : <IndexRoute component={ LoginRegistration } /> }
				<Route path="/login" component={ LoginRegistration } />
				<Route name="newBeer" path="/beers/new" component={ NewBeer } onEnter={ authenticate } />
				<Route name="beers" path="/beers" component={ Beers } onEnter={ authenticate } />
				<Route name="viewBeer" path="/beers/:_id" component={ ViewBeer } onEnter={ authenticate } />
			</Route>
		</Router>,
		document.getElementById('render-target')
	);
});