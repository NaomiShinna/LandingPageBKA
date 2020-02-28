import React from 'react';
import {
	Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, Button
} from 'reactstrap';

const homeRightSide = (props) => {
	return (
		<Container fluid={true}>
			<Row>
				<Card>
					<CardBody>
						<CardTitle>Exit Study</CardTitle>
						<CardText>Untuk melihat data-data</CardText>
						<Button>Click Me</Button>
					</CardBody>
				</Card>
			</Row>
		</Container>
	

	);
};

export default homeRightSide;