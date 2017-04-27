import React from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';

const ViewBeer = ({ beer }) => (
  <div className="ViewBeer">
    <div className="page-header clearfix">
      <h4 className="pull-left">{ beer && beer.name }</h4>
    </div>
    <p>{ beer.description }</p>
    <p>Brewery: { beer.brewery }</p>
    <p>Type: { beer.type }</p>
    <p>Recommended: { beer.recommended ? 'Yes' : 'No' }</p>
  </div>
);

ViewBeer.propTypes = {
  beer: React.PropTypes.object,
};

export default ViewBeer;
