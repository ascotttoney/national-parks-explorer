import React, { Component } from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'

export default class Profile extends Component {
  render() {
    return(
      <Card style={{width: '70%'}}>
        <Card.Img variant="top" src={this.props.user.profilePicture} />
        <Card.Body>
          <Card.Title>Hello, {this.props.user.firstName}!</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroupItem>National Parks Visited:</ListGroupItem>
          <ListGroupItem>National Parks Yet To Visit:</ListGroupItem>
          <ListGroupItem>Some Other Stuff?</ListGroupItem>
        </ListGroup>

        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>

        <Button variant="primary" type="submit" onClick={this.props.handleLogout}>
          Log Out
        </Button>
      </Card>
    )
  }
}
