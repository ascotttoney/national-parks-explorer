import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { NavigationBar } from './NavigationBar';
import Parks from './Parks'
import { PastVisit } from './PastVisit';
import FutureVisit from './FutureVisit';
import { NoMatch } from '../components/NoMatch'
import { Layout } from './Layout';
import { ParkDetails } from '../components/ParkDetails';
import { Map } from '../components/Map';
import MyModal from '../components/MyModal'
import Profile from './Profile'
import Login from './Login'

const URL = `http://localhost:3000/`

export default class AllContainer extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      newVisitState: '',
      newVisit: {},
      modalShow: false,
      parks: [],
      showPark: false,
      pastVisits: [],
      futureVisits: [],
      search: "",
      user: {
        id: "",
        userName: "",
        firstName: "",
        lastName: "",
        profilePicture: "",
        errors: ""
      },
      newUser: {
        userName: "",
        password: "",
        firstName: "",
        lastName: "",
        profilePicture: "",
        errors: "",
        myPastVisits: [],
        myFutureVisits: []
      },
      signUpForm: false
    }
  }


  getMyVisits = () => {
    if (!localStorage.token) return null
    return this.state.pastVisits.filter(visit => visit.id === this.state.user.id)
  }

  getMyFuture = () => {
    if (!localStorage.token) return null
    return this.state.futureVisits.filter(visit => visit.id === this.state.user.id)
  }

  postVisit = (visit) => {
    let newVisit = visit
    newVisit['park_id'] = this.state.newVisit['park_id']
    newVisit['user_id'] = this.state.user['id']
    let url = URL + this.state.newVisitState.toLowerCase() + '_visits'

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', accepts: 'application/json' },
      body: JSON.stringify({ visit: newVisit })
    })
      .then(res => res.json())
      .then(postVisit => {
        if (this.state.newVisit === "Future") {
          this.modalClose()
        }
        else {
          this.modalClose()
          let visits = [...this.state.pastVisits, postVisit]
          this.setState({ pastVisits: visits, redirect: <Redirect to='/past_visits' /> })
        }
      })
  }

  modalShow = () => this.setState({ modalShow: true })
  modalClose = () => this.setState({ modalShow: false })
  searchChange = (e) => e.target.value.length > 2 ?
    this.setState({ search: e.target.value.toLowerCase() }) :
    this.setState({ search: e.target.value })
  showPark = (park) => this.setState({ showPark: park })
  backToParks = () => this.setState({ showPark: false })
  filterPark = (park) => {
    const search = this.state.search
    return park.fullname.toLowerCase().includes(search) ||
      park.description.toLowerCase().includes(search) ||
      park.weatherInfo.toLowerCase().includes(search) ||
      park.states.includes(search)
  }

  planNewVisit = (park) => {
    this.setState({ newVisitState: "Future", newVisit: { park_id: park.id } })
    this.modalShow()
  }

  logPastVisit = (park) => {
    this.setState({ newVisitState: "Past", newVisit: { park_id: park.id } })
    this.modalShow()
  }

  // fetchImages(park) {
  //   let newParks = this.state.parks
  //   fetch(URL + `parks/${park.id}/images`)
  //     .then(res => res.json())
  //     .then(imgs => {
  //       console.log("imgs", imgs)
  //       park.imgs = imgs
  //       newParks.push(park)
  //       this.setState({ parks: newParks })
  //     })
  // }

  fetchParks() {
    fetch(URL + 'parks')
      .then(res => res.json())
      .then(parks => this.setState({parks: parks})
      )
  }

  fetchVisits() {
    fetch(URL + 'past_visits')
      .then(res => res.json())
      .then(data => {
        this.setState({ pastVisits: data })
      })

    fetch(URL + 'future_visits')
      .then(res => res.json())
      .then(data => {
        this.setState({ futureVisits: data })
      })
  }

  displayParks = () => {
    let parks = this.state.parks
    return parks.filter(park => this.filterPark(park))
  }

  componentDidMount() {
    this.fetchParks()
    this.fetchVisits()
    if (localStorage.token) this.checkCurrentUser()
  }

  checkCurrentUser = () => {
    let token = localStorage.token
    fetch(`http://localhost:3000/profile`, {
      method: 'GET',
      headers: { Authorization: token }
    })
      .then(res => res.json())
      .then(data => this.setState({ user: data.user })
      )
  }


  // LOGIN & LOGOUT //

  handleUserInputChange = (key, value) => {
    this.setState({ user: { ...this.state.user, [key]: value } })
  }

  handleLogin = (e) => {
    e.preventDefault()

    let userObject = {
      userName: this.state.user.userName,
      password: this.state.user.password
    }

    fetch(URL + 'login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: userObject })
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          alert("Sorry, your username or password is incorrect.")
          this.setState({ errors: data.message }, () => console.log("errors", this.state.errors))
        }
        else {
          this.setState({ user: data.user, redirect: <Redirect to='/profile' /> })
          localStorage.setItem('token', data.jwt)
          window.history.pushState({ url: "/profile" }, "", "/profile")
          this.forceUpdate()
        }
      })
    e.target.parentElement.reset()
  }

  handleLogout = () => {
    localStorage.removeItem('token')
    this.setState({ redirect: <Redirect to='/login' /> })
  }


  // NEW USER STUFF //

  handleNewUserInput = (key, value) => {
    this.setState({ newUser: { ...this.state.newUser, [key]: value } })
  }

  handleCreateUser = (e) => {
    e.preventDefault()

    fetch(URL + 'users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: this.state.newUser })
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          alert("Sorry, your username or password is incorrect.")
          this.setState({ errors: data.message }, () => console.log("errors", this.state.errors))
        }
        else {
          this.setState({ user: data.user, signUpForm: false, redirect: <Redirect to='/profile' /> })
          localStorage.setItem('token', data.jwt)
          window.history.pushState({ url: "/profile" }, "", "/profile")
          this.forceUpdate()
        }
      })
  }

  showSignUpForm = (e) => {
    e.preventDefault()
    this.state.signUpForm ? this.setState({ signUpForm: false }) : this.setState({ signUpForm: true })
  }

  // RENDER & ROUTES //

  render() {
    return (
      <React.Fragment>
        <MyModal
          show={this.state.modalShow}
          onHide={this.modalClose}
          newVisitState={this.state.newVisitState}
          postVisit={this.postVisit} />

        <NavigationBar
          searchChange={this.searchChange}
          loggedIn={this.state.loggedIn}
          handleLogout={this.handleLogout} />

        <Layout>
          <Router>
            {this.state.redirect}

            <Switch>
              <Route exact path="/" render={() => (
                this.state.showPark ?
                  <ParkDetails
                    park={this.state.showPark}
                    backToParks={this.backToParks}
                    planNewVisit={this.planNewVisit}
                    logPastVisit={this.logPastVisit} /> :
                  <Map
                    parks={this.displayParks()}
                    showPark={this.showPark}
                    planNewVisit={this.planNewVisit}
                    logPastVisit={this.logPastVisit} />
              )} />

              <Route path="/parks" render={() => (
                this.state.showPark ?
                  <ParkDetails
                    park={this.state.showPark}
                    backToParks={this.backToParks} /> :
                  <Parks
                    parks={this.displayParks()}
                    showPark={this.showPark}
                    planNewVisit={this.planNewVisit}
                    logPastVisit={this.logPastVisit}
                  />
              )} />

              <Route path="/past_visits" render={() => (
                <PastVisit pastVisits={this.state.pastVisits} />)
              } />

              <Route path="/future_visits" render={() => (
                <FutureVisit futureVisits={this.state.futureVisits} />)
              } />

              <Route path="/login" render={() => (
                <Login
                  handleUserInputChange={this.handleUserInputChange}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  handleCreateUser={this.handleCreateUser}
                  handleNewUserInput={this.handleNewUserInput}
                  showSignUpForm={this.showSignUpForm}
                  signUpForm={this.state.signUpForm} />
              )} />

              <Route path="/profile" render={() => (
                <Profile
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                  pastVisits={this.getMyVisits()}
                  futureVisits={this.getMyFuture()} />
              )} />

              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    )
  }
}
