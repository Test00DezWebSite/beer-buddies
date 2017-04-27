import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Beers from '../beers';

Meteor.publish('beers.list', () => Beers.find({}, {public: true}));

Meteor.publish('beers.view', (_id) => {
  check(_id, String);
  return Beers.find(_id);
});