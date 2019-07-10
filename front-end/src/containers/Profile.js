import React, { Component } from 'react'
import { Container, Row, Col, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'

export default class Profile extends Component {
  render() {
    return(
      
      <Container >
      <Row className="pt-3 pb-5 justify-content-md-center" >
      <Col md={8}>
        <Card>
          <Card.Img style={{width: '25%'}} variant="right" src={this.props.user.profilePicture} roundedCircle />
          <Card.Body>
            <Card.Title>Hello, {this.props.user.firstName}!</Card.Title>
            <Card.Text>
              Welcome to your National Parks Expolorer profile!
            </Card.Text>
          </Card.Body>

          <ListGroup className="list-group-flush" >
            <ListGroupItem>National Parks Visited:</ListGroupItem>
            <ListGroupItem>National Parks Yet To Visit:</ListGroupItem>
            <ListGroupItem>Some Other Stuff?</ListGroupItem>
          </ListGroup>

          <Card.Body >
            <Button variant="primary" type="submit" onClick={this.props.handleLogout}>
              Log Out
            </Button>
          </Card.Body>

        </Card>
      </Col>
      </Row>
      </Container>
    
    )
  }
}
