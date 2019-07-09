import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

export default class Login extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="userName"
              placeholder="Enter username"
              onChange={(e) => this.props.handleUserInputChange('userName', e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              onChange={(e) => this.props.handleUserInputChange('password', e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={this.props.handleLogin} >
            Submit
          </Button>

        </Form>
      </div>
    )
  }
}
