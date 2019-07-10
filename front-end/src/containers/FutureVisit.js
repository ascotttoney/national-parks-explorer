import React, { Component } from 'react'
import { ParkCard } from '../components/ParkCard'
import { Route } from 'react-router-dom'
import { Container, Row, Card } from 'react-bootstrap'

export default class FutureVisit extends Component {
  render() {
    return (
      <Container>
        {this.props.futureVisits.map(visit => {
          return (
            <Row className="pt-3 pb-2 justify-content-md-center">
              <Card className="m-1 card" style={{ width: '50rem' }}>
                <Card.Body className="card-body">

                  <h2 className="card-title">{visit.park.fullname}</h2>

                  <h3>{ `Title: ${visit.title}` }</h3>
                  <h3>{ `Name: ${visit.user.firstName} ${visit.user.lastName}` }</h3>
                  <h3>{ `Season: ${visit.season} ${visit.year}` }</h3>

                  <p className="card-text">{visit.description }</p>
                </Card.Body>
              </Card>
            </Row>
          )
        })}
      </Container>
    )
  }
}
