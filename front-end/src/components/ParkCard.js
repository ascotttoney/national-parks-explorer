import React from 'react';
import { Card, Button, Image } from 'react-bootstrap';

export default class ParkCard extends React.PureComponent {
	render() {
		const img =
			this.props.park.park_images[
				Math.floor(Math.random() * this.props.park.park_images.length)
			];

		return (
			<div className="pt-3">
				<Card>
					<Image
						className="p-1 card-img-bottom"
						onClick={(e) => this.props.showPark(this.props.park)}
						style={{
							maxHeight: '20rem',
							maxWidth: '25rem',
							borderRadius: '10px',
						}}
						src={img.url}
						alt={img.caption}
					/>
					<div className="card-body">
						<h4 className="card-title">{this.props.park.name}</h4>
					</div>

					<Button
						className="m-1"
						variant="success"
						onClick={(e) =>
							this.props.logPastVisit(this.props.park)
						}
					>
						Log Past Visit
					</Button>

					<Button
						className="m-1"
						variant="warning"
						onClick={(e) =>
							this.props.planNewVisit(this.props.park)
						}
					>
						Plan New Visit
					</Button>
				</Card>
			</div>
		);
	}
}
