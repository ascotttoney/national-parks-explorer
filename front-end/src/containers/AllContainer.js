import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavigationBar } from './NavigationBar';
import { Map } from '../components/Map';
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
    search: ""
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

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" render={() => (
                this.state.showPark ? <ParkDetails park={this.state.showPark} backToParks={this.backToParks} /> : <Map parks={this.displayParks()} showPark={this.showPark} />
              )} />
              <Route path="/parks" render={() => (
                this.state.showPark ? <ParkDetails park={this.state.showPark} backToParks={this.backToParks} /> : <Parks parks={this.displayParks()} showPark={this.showPark} searchChange={this.searchChange} />
              )} />
              <Route path="/visits" component={Visit} />
              <Route path="/login" component={UserPage} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    )
  }
}
