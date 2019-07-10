import React, { Component } from 'react'

export default class FutureVisit extends Component {
  render() {
    return (
      <div>
       {this.props.futureVisits.map(visit => {
        return( 
          <div className="m-1 card" style={{ background: 'rgb(216, 110, 110)', maxHeight: '35rem', width: '89rem', borderRadius: "20px" }}>
            <div className="card-body">
              <h2 className="card-title">{ `Park: ${visit.park.name}`}</h2>
          
              <h3>{ `Title: ${visit.title}` }</h3>
              <h3>{ `Name: ${visit.user.userName}` }</h3>
              <h3>{ `Season: ${visit.season}: ${visit.year}` }</h3>
              
              <p className="card-text">{ visit.description }</p>
            </div>
          </div>
        )
       })}
      </div>
    )
  }
}