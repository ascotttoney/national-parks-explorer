import React, { Component } from 'react'
import { ParkCard } from '../components/ParkCard'
import { Route } from 'react-router-dom'
import { Container, Card, Row, Col, Button, Form } from 'react-bootstrap'

export const PastVisit = (props) => {
  return (
    <Container>
      {props.pastVisits.map(visit => {
        return (
          <Row className="pt-3 pb-3 justify-content-md-center">
          <Col md={9}>
            <Card>
              <Card.Header
                as="h2"
                className="text-white"
                style={{ background: 'rgb(54, 75, 30)' }} >
                  { visit.park.fullname }
              </Card.Header>

              <Card.Body>
                <h3>{ `Title: ${visit.title}` }</h3>
                <h4>{ `By: ${visit.user.userName}` }</h4>
                <h4>{ `When: ${visit.season} ${visit.year}` }</h4>
                <p>{ visit.description }</p>
              </Card.Body>
            </Card>
          </Col>
          </Row>
        )
      })}
    </Container>
  )
}
