import React, { Component } from 'react'
import { Container, Col, Row, Button, Form } from 'react-bootstrap'

export default class Login extends Component {

  handleSignUp() {
    return (
      <div>
        <Container>
          <Row className="pt-3 pb-5 justify-content-md-center">
            <Col xs={5}>
              <Form>
                <Form.Group>
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type="userName"
                    placeholder="Enter your desired username"
                    onChange={(e) => this.props.handleNewUserInput('userName', e.target.value)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your desired password"
                    onChange={(e) => this.props.handleNewUserInput('password', e.target.value)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>First Name:</Form.Label>
                  <Form.Control
                    type="firstName"
                    placeholder="Enter your first name"
                    onChange={(e) => this.props.handleNewUserInput('firstName', e.target.value)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Last Name:</Form.Label>
                  <Form.Control
                    type="lastName"
                    placeholder="Enter your last name"
                    onChange={(e) => this.props.handleNewUserInput('lastName', e.target.value)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Profile Picture:</Form.Label>
                  <Form.Control
                    type="profilePicture"
                    placeholder="Enter a photo URL"
                    onChange={(e) => this.props.handleNewUserInput('profilePicture', e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.props.handleCreateUser} >
                  Submit New User
            </Button>

              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

  render() {
    return (
      <div>
        <br />
        <Container>
          <Row className="pt-5 justify-content-md-center">
            <Col xs={5}>
              <Form>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type="userName"
                    placeholder="Enter username"
                    onChange={(e) => this.props.handleUserInputChange('userName', e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => this.props.handleUserInputChange('password', e.target.value)} />
                </Form.Group>

                <Button name='login' variant="primary" type="submit" onClick={this.props.handleLogin} >
                  Submit
            </Button>

                <br /><br /><br />

                <h5>Not registered?</h5>
                <Button variant="primary" type="submit" onClick={this.props.showSignUpForm} >
                  Sign Up
            </Button>

              </Form>
            </Col>
          </Row>
        </Container>

        {this.props.signUpForm ? this.handleSignUp() : null}

      </div>
    )
  }
}
