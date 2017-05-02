import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Beers from '../../api/beers/beers.js';
import Dashboard from '../components/beers/dashboard.jsx';
import Loading from '../components/Loading.js';

const composer = ({ params }, onData) => {
  const subscription = Meteor.subscribe('beers.dashboard');

  if (subscription.ready()) {
    const beers = Beers.find().fetch();
    const numBeers = Beers.find().count();
    const recommendedBeers = Beers.find({}, {recommended: true}).count()
    onData(null, {beers, numBeers, recommendedBeers} );
  }
};

export default composeWithTracker(composer, Loading)(Dashboard);
