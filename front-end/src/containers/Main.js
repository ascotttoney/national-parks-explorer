import React, { Component } from 'react'
import { Map } from '../components/Map'


export default class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Map parks={this.props.parks} />
        </h1>
      </div>
    )
  }
}
