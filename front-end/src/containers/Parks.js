import React, { Component } from 'react'
import { ParkCard } from '../components/ParkCard'

export default class ParksContainer extends Component {
  render() {
    console.log(this.props.parks)
    return (
      <div>
        <h1>Parks</h1>
        <div className="row">
          {this.props.parks.map(park => {
            return <ParkCard key={park.id} park={park} />
          })}
        </div>
      </div>
    )
  }
}
