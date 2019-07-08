import React, { Component } from 'react'
import Login from './Login'
import Profile from './Profile'

export default class UserPage extends Component {
  render() {
    return (
      <div>
        {this.props.loggedIn ?
          <Profile
            loggedIn={this.props.loggedIn}
            user={this.props.user}
          />
            :
          <Login
            loggedIn={this.props.loggedIn}
            user={this.props.user}
            handleUserInputChange={this.props.handleUserInputChange}
            handleLogin={this.props.handleLogin}
          />
        }
      </div>
    )
  }
}
