import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Beers from '../../api/beers/beers.js';
import ViewBeer from '../pages/ViewBeer.js';
import Loading from '../components/Loading.js';

const composer = ({ params }, onData) => {
  const subscription = Meteor.subscribe('beers.view', params._id);

  if (subscription.ready()) {
    const beer = Beers.findOne();
    onData(null, { beer });
  }
};

export default composeWithTracker(composer, Loading)(ViewBeer);
