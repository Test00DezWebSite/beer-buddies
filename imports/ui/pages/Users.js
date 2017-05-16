import React from 'react';
import { Row, Col } from 'react-bootstrap';
import UsersList from '../containers/UsersList.js';

const Users = () => (
  <div className="Users">
    <Row>
      <Col xs={ 12 }>
        <UsersList />
      </Col>
    </Row>
  </div>
);

export default Users;
