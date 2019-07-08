import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavigationBar } from './NavigationBar';
import Main from './Main'
import Parks from './Parks'
import Visit from './Visit';
import UserPage from './UserPage'
import { NoMatch } from '../components/NoMatch'
import { Layout } from './Layout';
import { ParkDetails } from '../components/ParkDetails';

const URL = `http://localhost:3000/`

export default class AllContainer extends Component {
  state = {
    parks: [],
    showPark: false,
    loggedIn: false,
    user: {
      userName: "",
      password: "",
      firstName: "",
      lastName: "",
      profilePicture: "",
      errors: ""
    }
  }

  showPark = (park) => this.setState({ showPark: park })
  backToParks = () => this.setState({ showPark: false })

  fetchImages(park) {
    let newParks = this.state.parks
    fetch(URL + `parks/${park.id}/images`)
      .then(res => res.json())
      .then(imgs => {
        park.imgs = imgs
        newParks.push(park)
        this.setState({ parks: newParks })
      })
  }

  async fetchParks() {
    fetch(URL + 'parks')
      .then(res => res.json())
      .then(parks => parks.forEach(park => {
        this.fetchImages(park)
      }))
  }

  componentDidMount() {
    this.fetchParks()
  }

  handleUserInputChange = (key, value) => {
    this.setState({user: {...this.state.user, [key]: value}}, () => console.log(this.state.user))
  }

  handleLogin = (e) => {
    e.preventDefault()

    console.log('user before fetch:', this.state.user)

    let userObject = {
      userName: this.state.user.userName,
      password: this.state.user.password
    }

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user: userObject})
    })
    .then(res => res.json())
    .then(data => {
      if (data.errors) {
        alert("Sorry, your username or password is incorrect.")
        this.setState({errors: data.errors}, () => console.log("errors", this.state.errors))
      }
      else {
        this.setState({user: data.user, loggedIn: true})
        localStorage.setItem('token', data.jwt)
        window.history.pushState({url: "/profile"}, "", "/profile")
        this.forceUpdate()
      }
    })
    e.target.parentElement.reset()
  }


  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />

              <Route path="/parks" render={(props) => (
                this.state.showPark ?
                  <ParkDetails
                    park={this.state.showPark}
                    backToParks={this.backToParks} /> :
                  <Parks {...props}
                    parks={this.state.parks}
                    showPark={this.showPark} />
              )} />

              <Route path="/visits" component={Visit} />

              <Route path="/login" render={(props) => (
                <UserPage {...props}
                  user={this.state.user}
                  handleUserInputChange={this.handleUserInputChange}
                  loggedIn={this.state.loggedIn}
                  handleLogin={this.handleLogin} />
              )} />

              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    )
  }
}
