import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Beers from '../../api/beers/beers.js';
import BeersList from '../components/beers/BeersList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {

	const subscription = Meteor.subscribe('beers.list');
  if (subscription.ready()) {
    const beers = Beers.find().fetch();
    onData(null, { beers });
  }
};

export default composeWithTracker(composer, Loading)(BeersList);