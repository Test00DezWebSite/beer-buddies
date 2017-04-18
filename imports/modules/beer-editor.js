/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertBeer } from '../api/beers/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { beer } = component.props;
  const confirmation = beer && beer._id ? 'Beer updated!' : 'Beer added!';
  const upsert = {
    name: document.querySelector('[name="name"]').value.trim(),
    description: document.querySelector('[name="description"]').value.trim(),
    brewery: document.querySelector('[name="brewery"]').value.trim(),
    type: document.querySelector('[name="type"]').value.trim(),
    //image: document.querySelector('[name="image"]').value.trim(),
    recommended: document.querySelector('[name="recommended"]').value.trim(),
    public: document.querySelector('[name="public"]').value.trim(),
    userId: Meteor.userId()
  };

  if (beer && beer._id) upsert._id = beer._id;

  upsertBeer.call(upsert, (error, response) => {
    if (error) {
      console.log(error);
      Bert.alert(error, 'danger');
    } else {
      component.beerEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/beers/${response.insertedId || beer._id}`);
    }
  });
};

const validate = () => {
  $(component.beerEditorForm).validate({
    rules: {
      name: {
        required: true,
      },
      description: {
        required: true,
      },
      brewery: {
        required: true,
      },
      type: {
        required: true,
      },
      recommended: {
        required: true,
      },
      public: {
        required: true,
      },
    },
    messages: {
      name: {
        required: 'Need a name in here.',
      },
      description: {
        required: 'This needs a description, please.',
      },
      brewery: {
        required: 'What brewery made this?',
      },
      type: {
        required: 'Put in a type.',
      },
      recommended: {
        required: 'Would you recommend this?',
      },
      public: {
        required: 'Public or not?',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function beerEditor(options) {
  component = options.component;
  validate();
}
