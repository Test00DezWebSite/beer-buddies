import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.publish('users.list', () => Meteor.users.find());
