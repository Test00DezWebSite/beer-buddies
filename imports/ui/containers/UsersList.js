import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import UsersList from '../components/users/UsersList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {

	const subscription = Meteor.subscribe('users.list');
  if (subscription.ready()) {
    const users = Meteor.users.find().fetch();
    onData(null, { users });
  }
};

export default composeWithTracker(composer, Loading)(UsersList);