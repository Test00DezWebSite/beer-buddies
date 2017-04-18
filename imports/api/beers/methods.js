import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Beers from './beers';

export const upsertBeer = new ValidatedMethod({
  name: 'beers.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    userId: { type: String, optional: false },
    name: { type: String, optional: true },
    description: { type: String, optional: true },
    brewery: { type: String, optional: false },
    type: { type: String, optional: false },
    image: { type: String, optional: true },
    recommended: { type: String, optional: false },
    public: { type: String, optional: false },
  }).validator(),
  run(beer) {
    return Beers.update({ _id: beer._id }, { $set: beer }, {upsert: true});
  },
});