import React, { Component } from 'react';
import Login from './Login';
import Profile from './Profile';

export default class UserPage extends Component {
	render() {
		return (
			<div>
				{this.props.loggedIn ? (
					<Profile
						user={this.props.user}
						handleLogout={this.props.handleLogout}
					/>
				) : (
					<Login
						user={this.props.user}
						handleUserInputChange={this.props.handleUserInputChange}
						handleLogin={this.props.handleLogin}
						handleCreateUser={this.props.handleCreateUser}
						handleNewUserInput={this.props.handleNewUserInput}
						showSignUpForm={this.props.showSignUpForm}
						signUpForm={this.props.signUpForm}
					/>
				)}
			</div>
		);
	}
}
