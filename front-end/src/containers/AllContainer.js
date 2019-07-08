import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavigationBar } from './NavigationBar';
import Parks from './Parks'
import Visit from './Visit';
import UserPage from './UserPage'
import { NoMatch } from '../components/NoMatch'
import { Layout } from './Layout';
import { ParkDetails } from '../components/ParkDetails';
import { Map } from '../components/Map';

const URL = `http://localhost:3000/`

export default class AllContainer extends Component {
  state = {
    parks: [],
    showPark: false,
    search: "",
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

  searchChange = (e) => e.target.value.length > 2 ? this.setState({ search: e.target.value.toLowerCase() }) : this.setState({ search: e.target.value })
  showPark = (park) => this.setState({ showPark: park })
  backToParks = () => this.setState({ showPark: false })
  filterPark = (park) => {
    const search = this.state.search
    return park.fullname.toLowerCase().includes(search) || park.description.toLowerCase().includes(search) || park.weatherInfo.toLowerCase().includes(search) || park.states.includes(search)
  }

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

  displayParks = () => {
    let parks = this.state.parks
    return parks.filter(park => this.filterPark(park))
  }

  componentDidMount() {
    this.fetchParks()
  }

  handleUserInputChange = (key, value) => {
    this.setState({user: {...this.state.user, [key]: value}}, () => console.log(this.state.user))
  }

  handleLogin = (e) => {
    e.preventDefault()

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
      if (data.message) {
        alert("Sorry, your username or password is incorrect.")
        this.setState({errors: data.message}, () => console.log("errors", this.state.errors))
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

  handleLogout = (e) => {
    // e.preventDefault()

    localStorage.removeItem('token')
    this.setState({loggedIn: false})
    window.history.pushState({url:'/'}, "", "/")
    this.forceUpdate()
  }


  render() {
    return (
      <React.Fragment>
        <NavigationBar loggedIn={this.state.loggedIn} handleLogout={this.handleLogout} />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" render={() => (
                this.state.showPark ?
                  <ParkDetails
                    park={this.state.showPark}
                    backToParks={this.backToParks} /> :
                    <Map parks={this.displayParks()}
                    showPark={this.showPark} />
              )} />

              <Route path="/parks" render={(props) => (
                this.state.showPark ?
                  <ParkDetails
                    park={this.state.showPark}
                    backToParks={this.backToParks} /> :
                  <Parks {...props}
                    parks={this.displayParks()}
                    showPark={this.showPark} />
              )} />

              <Route path="/visits" component={Visit} />

              <Route path="/login" render={(props) => (
                <UserPage {...props}
                  user={this.state.user}
                  handleUserInputChange={this.handleUserInputChange}
                  loggedIn={this.state.loggedIn}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout} />
              )} />

              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    )
  }
}
