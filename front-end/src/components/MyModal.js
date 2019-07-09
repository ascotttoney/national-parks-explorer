import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import ModalForm from './ModalForm'

export default class MyModal extends Component {
  state = {
    title: "",
    description: "",
    season: "",
    year: ""
  }

  handleFormChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {`${this.props.newVisitState} Visit Form`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalForm form={this.state} handleFormChange={this.handleFormChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal >
    );
  }
}
