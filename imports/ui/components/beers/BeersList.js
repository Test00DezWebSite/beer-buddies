import React from 'react';
import { browserHistory, Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem, ListGroup, ListGroupItem, Alert } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

const handleNav = (_id) => {
  browserHistory.push(`/beers/${_id}`);
}

const BeersList = ({ beers }) => (
  <div>
    <div className="page-header clearfix">
      <h4 className="pull-left">Beers</h4>
    </div>
    {beers.length > 0 ? <ListGroup className="BeersList">
      {beers.map(({ _id, name }) => (
        <ListGroupItem key={ _id } onClick={ () => handleNav(_id) }>
          { name }
        </ListGroupItem>
      ))}
    </ListGroup> :
    <Alert bsStyle="warning">No beers.</Alert>}
  </div>
);

BeersList.propTypes = {
  beers: React.PropTypes.array,
};

export default BeersList;
