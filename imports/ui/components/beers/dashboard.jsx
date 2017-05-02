import React from 'react';
import { browserHistory } from 'react-router';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const handleNav = (_id) => {
  browserHistory.push(`/beers/${_id}`);
}

const Dashboard = ({beers, numBeers, recommendedBeers}) => (
  <div className="Dashboard">
    <h1>Dashboard</h1>
    <hr/>
	<Row>
		<Col xs={6}>
			<h3>You've tried {numBeers} {numBeers == 1 ? 'beer' : 'beers'}</h3>
		</Col>
		<Col xs={6}>
			<h3>You've recommended {recommendedBeers} {recommendedBeers == 1 ? 'beer' : 'beers'}</h3>
		</Col>
	</Row>
	<hr/>
	<Row>
		<Col xs={6}>
			<h3>Your beers</h3>
			{beers.length > 0 ? <ListGroup className="BeersList">
			  {beers.map(({ _id, name }) => (
			    <ListGroupItem key={ _id } onClick={ () => handleNav(_id) }>
			      { name }
			    </ListGroupItem>
			  ))}
			</ListGroup> :
			<Alert bsStyle="warning">No beers.</Alert>}
		</Col>
		<Col xs={6}>
			<h3>Your friends</h3>
		</Col>
	</Row>
  </div>
);

Dashboard.propTypes = {
  beers: React.PropTypes.array,
  numBeers: React.PropTypes.number,
  recommendedBeers: React.PropTypes.number,
};

export default Dashboard;