
import React, { Component } from 'react'

export default class FutureVisit extends Component {


  render() {
    return (
      <div>
       {this.props.futureVisits.map(visit => {
        return( 
        <div className="m-1 card" style={{ width: '90rem' }}>
        <div className="card-body">
          {/* <img className="card-img-top" src={visit.park_id}/> */}
          <h2 className="card-title">{`Park: ${visit.park.name}`}</h2>
          
              <h3>{ `Title: ${visit.title}` }</h3>
              <h3>{ `Name: ${visit.user.userName}` }</h3>
              <h3>{ `Season: ${visit.season}: ${visit.year}` }</h3>

              
              <p className="card-text">{ visit.description }</p>
        </div>
        </div>
        )

        
        //  console.log(visit)
       })}
      </div>
    )
  }
}
