import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavigationBar } from './NavigationBar';
import Main from './Main';
import Parks from './Parks'
import {PastVisit} from './PastVisit';
import FutureVisit from './FutureVisit';
import UserPage from './UserPage'
import { NoMatch } from '../components/NoMatch'
import { Layout } from './Layout';
import { ParkDetails } from '../components/ParkDetails';

const URL = `http://localhost:3000/`

export default class AllContainer extends Component {
  state = {
    parks: [],
    showPark: false,
    pastVisits: [],
    futureVisits: []
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
      .then(parks => 
        parks.forEach(park => {
        this.fetchImages(park)
      })
      )
  }

  fetchVisits(){
    fetch(URL + 'past_visits')
    .then(res => res.json())
    .then(data =>   
    { 
      this.setState({ pastVisits: data })
    }
    )

    fetch(URL + 'future_visits')
    .then(res => res.json())
    .then(data => 
    {this.setState({ futureVisits: data })}
    )
  }

  componentDidMount() {
    this.fetchParks()
    this.fetchVisits()
  }

  render() {
    // console.log(pastVisits)
    return (
      <React.Fragment>
        <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/parks" render={(props) => (
                this.state.showPark ? <ParkDetails park={this.state.showPark} backToParks={this.backToParks} /> : <Parks {...props} parks={this.state.parks} showPark={this.showPark} />
              )} />
              <Route path="/past_visits" render={() => ( <PastVisit pastVisits={this.state.pastVisits} parks={this.state.parks} />)} />
              <Route path="/future_visits" render={() => ( <FutureVisit futureVisits={this.state.futureVisits} />)} />
              <Route path="/login" component={UserPage} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    )
  }
}
