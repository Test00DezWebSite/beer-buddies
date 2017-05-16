import React from 'react';
import { browserHistory, Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem, ListGroup, ListGroupItem, Alert } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

const addFriend = (_id) => {
  console.log('friend added');
}

const UsersList = ({ users }) => (
  <div>
    <div className="page-header clearfix">
      <h4 className="pull-left">Users</h4>
    </div>
    {users.length > 0 ? <ListGroup className="UsersList">
      {users.map(({ _id, emails }) => (
        <ListGroupItem key={ _id } onClick={ () => addFriend(_id) }>
          { emails[0]['address'] } - Add Friend
        </ListGroupItem>
      ))}
    </ListGroup> :
    <Alert bsStyle="warning">No users.</Alert>}
  </div>
);

UsersList.propTypes = {
  users: React.PropTypes.array,
};

export default UsersList;
