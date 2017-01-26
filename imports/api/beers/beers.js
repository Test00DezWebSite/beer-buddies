const Beers = new Mongo.Collection('beers');

const Schemas = {};

Schemas.Beer = new SimpleSchema({
  user_id: {
    type: String
  },
  name: {
    type: String,
    max: 200
  },
  description: {
    type: String
  },
  brewery: {
    type: String
  },
  type: {
    type: String,
    max: 200
  },
  image: {
    type: String
  },
  recommended: {
    type: Boolean
  },
  public: {
    type: Boolean
  }
});