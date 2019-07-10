
import React, { Component } from 'react'

export default class FutureVisit extends Component {


  render() {
    return (
      <div>
       {this.props.futureVisits.map(visit => {
        //  console.log(visit.park.park_images)
        return( 
        <div className="m-1 card" style={{ background: 'rgb(216, 110, 110)', maxHeight: '35rem', width: '89rem', borderRadius: "20px" }}>
        <div className="card-body">
          {/* <img className="card-img-top" src={visit.park_id}/> */}
          <h2 className="card-title">{ `Park: ${visit.park.name}`}</h2>
          
          <img className="p-2 card-img-bottom" 
             style={{ width: '70rem', maxHeight: '20rem', borderRadius: "10px" }} 
             src={visit.park.park_images[0].url}/>
            

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
