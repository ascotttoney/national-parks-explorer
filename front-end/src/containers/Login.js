import React, { Component } from 'react';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';

export default class Login extends Component {
	handleSignUp() {
		return (
			<div>
				<Container>
					<Row className="pt-3 pb-5 justify-content-md-center">
						<Col xs={5}>
							<Form onSubmit={this.props.handleCreateUser}>
								<Form.Group>
									<Form.Label>Username:</Form.Label>
									<Form.Control
										name="userName"
										placeholder="Enter your desired username"
									/>
								</Form.Group>

								<Form.Group>
									<Form.Label>Password:</Form.Label>
									<Form.Control
										name="password"
										placeholder="Enter your desired password"
									/>
								</Form.Group>

								<Form.Group>
									<Form.Label>First Name:</Form.Label>
									<Form.Control
										name="firstName"
										placeholder="Enter your first name"
									/>
								</Form.Group>

								<Form.Group>
									<Form.Label>Last Name:</Form.Label>
									<Form.Control
										name="lastName"
										placeholder="Enter your last name"
									/>
								</Form.Group>

								<Form.Group>
									<Form.Label>Profile Picture:</Form.Label>
									<Form.Control
										name="profilePicture"
										placeholder="Enter a photo URL"
									/>
								</Form.Group>

								<Button variant="primary" type="submit">
									Submit New User
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}

	render() {
		return (
			<div>
				<br />
				<Container>
					<Row className="pt-5 justify-content-md-center">
						<Col xs={5}>
							<Form onSubmit={this.props.handleLogin}>
								<Form.Group controlId="formBasicUsername">
									<Form.Label>Username:</Form.Label>
									<Form.Control
										name="userName"
										placeholder="Enter username"
									/>
								</Form.Group>
								<Form.Group controlId="formBasicPassword">
									<Form.Label>Password:</Form.Label>
									<Form.Control
										name="password"
										placeholder="Enter password"
									/>
								</Form.Group>
								<Button
									name="login"
									variant="primary"
									type="submit"
								>
									Submit
								</Button>
								<br /> <br /> <br />
								<h5>Not registered?</h5>
								<Button
									variant="primary"
									type="submit"
									onClick={this.props.showSignUpForm}
								>
									Sign Up
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>

				{this.props.signUpForm ? this.handleSignUp() : null}
			</div>
		);
	}
}
