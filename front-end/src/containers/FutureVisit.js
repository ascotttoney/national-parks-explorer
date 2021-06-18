import React, { Component } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

export default class FutureVisit extends Component {
	render() {
		return (
			<Container>
				{this.props.futureVisits.map((visit) => {
					const img =
						visit.park.park_images[
							Math.floor(
								Math.random() * visit.park.park_images.length
							)
						];
					return (
						<Row className="pt-3 pb-3 justify-content-md-center">
							<Col md={9}>
								<Card>
									<Card.Header
										as="h2"
										className="text-white"
										style={{
											background: 'rgb(200, 110, 120)',
										}}
									>
										{visit.park.fullname}
									</Card.Header>

									<Card.Body>
										<h3>{`Title: ${visit.title}`}</h3>
										<h4>{`By: ${visit.user.userName}`}</h4>
										<h4>{`When: ${visit.season} ${visit.year}`}</h4>
										<p>{visit.description}</p>
									</Card.Body>

									<Card.Img
										className="p-2"
										variant="bottom"
										style={{
											maxHeight: '20rem',
											borderRadius: '10px',
										}}
										src={img ? img.url : null}
									/>
								</Card>
							</Col>
						</Row>
					);
				})}
			</Container>
		);
	}
}
