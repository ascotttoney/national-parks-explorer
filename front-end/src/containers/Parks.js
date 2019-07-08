import React, { Component } from 'react'
import { ParkCard } from '../components/ParkCard'
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

const search = (searchChange) => (
  <MDBCol md="12">
    <MDBFormInline className="md-form mr-auto mb-6">
      <MDBIcon icon="search" />
      <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={e => searchChange(e)} />
    </MDBFormInline>
  </MDBCol>
)

export default class ParksContainer extends Component {
  render() {
    return (
      <div>
        <h1>Parks</h1>
        {search(this.props.searchChange)}
        <div className="row">
          {this.props.parks.map(park => {
            return <ParkCard key={park.id} park={park} showPark={this.props.showPark} />
          })}
        </div>
      </div>
    )
  }
}
