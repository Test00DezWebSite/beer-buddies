/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Radio } from 'react-bootstrap';
import beerEditor from '../../../modules/beer-editor.js';

export default class BeerEditor extends React.Component {
  componentDidMount() {
    beerEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="name"]').focus(); }, 0);
  }

  render() {
    const { beer } = this.props;
    return (<form
      className="BeerEditForm"
      ref={ form => (this.beerEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>Name</ControlLabel>
        <FormControl
          type="text"
          name="name"
          defaultValue={ beer && beer.name }
          placeholder="What's this beer called?"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Description</ControlLabel>
        <FormControl
          componentClass="textarea"
          name="description"
          defaultValue={ beer && beer.description }
          placeholder="What did this beer taste like? Smell like? Feel like? Look like?"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Brewery</ControlLabel>
        <FormControl
          type="text"
          name="brewery"
          defaultValue={ beer && beer.brewery }
          placeholder="Who made this beer?"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Type</ControlLabel>
        <FormControl
          type="text"
          name="type"
          defaultValue={ beer && beer.type }
          placeholder="What kind of beer is it?"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Would you recommend this beer?</ControlLabel>
        <Radio name="recommended" inline value="true" defaultValue={ beer && beer.recommended }>
        Yes
        </Radio>
        {' '}
        <Radio name="recommended" inline value="false" defaultValue={ beer && beer.recommended }>
          No
        </Radio>
      </FormGroup>
      <FormGroup>
        <ControlLabel>Do you want this beer to appear publicly?</ControlLabel>
        <Radio name="public" inline value="true" defaultValue={ beer && beer.public }>
        Yes
        </Radio>
        {' '}
        <Radio name="public" inline value="false" defaultValue={ beer && beer.public }>
          No
        </Radio>
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { beer && beer._id ? 'Save Changes' : 'Add Beer' }
      </Button>
    </form>);
  }
}

BeerEditor.propTypes = {
  beer: React.PropTypes.object,
};
