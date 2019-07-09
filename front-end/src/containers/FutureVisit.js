
import React, { Component } from 'react'

export default class FutureVisit extends Component {


  render() {
    return (
      <div>
        {this.props.futureVisits.map(visit => {
          return (
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-body">
                <img className="card-img-top" src={visit.park_id} />
                <h3 className="card-title">{visit.title}</h3>
                <p className="card-text">{visit.description}</p>
              </div>
            </div>
          )
          //  console.log(visit)
        })}
      </div>
    )
  }
}
