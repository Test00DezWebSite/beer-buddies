import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BeersList from '../containers/BeersList.js';

const Beers = () => (
  <div className="Beers">
    <Row>
      <Col xs={ 12 }>
        <BeersList />
      </Col>
    </Row>
  </div>
);

export default Beers;
