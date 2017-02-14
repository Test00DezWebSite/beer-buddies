import React from 'react';
import { Navigation } from '../components/navigation.jsx';

export const App = ( { children } ) => (
	<div className="container">
		<Navigation />
		{ children }
	</div>
)