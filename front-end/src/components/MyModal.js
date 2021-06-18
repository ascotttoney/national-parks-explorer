import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ModalForm from './ModalForm';
import { MdPhotoAlbum } from 'react-icons/md';
import { FaCarSide } from 'react-icons/fa';

export default class MyModal extends Component {
	state = {
		title: '',
		description: '',
		season: '',
		year: '',
	};

	handleFormChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<Modal
				onHide={this.props.onHide}
				show={this.props.show}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						{`${this.props.newVisitState} Visit Form `}
						{this.props.newVisitState === 'Future' ? (
							<FaCarSide />
						) : (
							<MdPhotoAlbum />
						)}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ModalForm
						form={this.state}
						handleFormChange={this.handleFormChange}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button
						className="btn btn-success"
						onClick={(e) => this.props.postVisit(this.state)}
					>
						Create
					</Button>
					<Button
						className="btn btn-danger"
						onClick={this.props.onHide}
					>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}
