import React, { Component } from 'react';
import { Container, Row, CardColumns, Image } from 'react-bootstrap';
import ParkCard from '../components/ParkCard';
import logo from '../components/mod-4-project-logo.png';

export default class ParksContainer extends Component {
	render() {
		return (
			<div>
				<Container>
					<Row className="justify-content-md-center">
						<Image src={logo} style={{ maxHeight: '8rem' }} />
					</Row>

					<CardColumns>
						<div>
							{this.props.parks.map((park) => {
								return (
									<ParkCard
										key={park.id}
										park={park}
										showPark={this.props.showPark}
										planNewVisit={this.props.planNewVisit}
										logPastVisit={this.props.logPastVisit}
									/>
								);
							})}
						</div>
					</CardColumns>
				</Container>
			</div>
		);
	}
}
