import React from 'react';
import { Button } from 'react-bootstrap';
import Gallery from 'react-awesome-slider';
import styles from '../galleryStyles.scss';

export const ParkDetails = (props) => {
	const { url, fullname, states, description, weatherInfo, park_images } =
		props.park;
	return (
		<div className="container">
			<div className="page-header">
				<h1 className="text-center">
					<a href={url} target="_blank" rel="noopener noreferrer">
						{fullname}
					</a>
				</h1>
			</div>

			<Gallery cssModule={styles}>
				{park_images.map((img) => (
					<div key={img.id} data-src={img.url} />
				))}
			</Gallery>

			<div className="pt-4 text-dark">
				<h6>{states}</h6>
				<p>{description}</p>
				<p>{weatherInfo}</p>

				<Button
					type="button"
					className="btn btn-primary"
					onClick={props.backToParks}
				>
					Back
				</Button>

				<Button
					type="button"
					className="btn btn-success m-1 float-right"
					onClick={(e) => props.logPastVisit(props.park)}
				>
					Log Past Visit
				</Button>

				<Button
					type="button"
					className="btn btn-warning m-1 float-right"
					onClick={(e) => props.planNewVisit(props.park)}
				>
					{' '}
					Plan New Visit
				</Button>
			</div>
		</div>
	);
};
