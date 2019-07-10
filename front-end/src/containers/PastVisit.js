import React, { Component } from 'react'
import { ParkCard } from '../components/ParkCard';
import { Route } from 'react-router-dom'

export const PastVisit = (props)=>{
  // console.log(props)
    return (
      <div>
        {props.pastVisits.map(visit => {
            // console.log('visit',visit)
         return  (<div className="m-1 card" style={{ width: '90rem' }}>
            <div className="card-body">
              {/* <img className="card-img-top" src={(props.parks.find(p=> console.log('p', p)))}/> */}

             {/* <div> <img className="card-img-top" src={props.parks.find(p=> p.id === visit.park_id).imgs[0].url}/></div> */}
 
              <h2 className="card-title">{`Park: ${visit.park.name}`}</h2>
            
              <h3>{ `Title: ${visit.title}` }</h3>
              <h3>{ `Name: ${visit.user.userName}` }</h3>
              <h3>{ `Season: ${visit.season}: ${visit.year}` }</h3>

              
              <p className="card-text">{visit.description }</p>
            </div>
          </div>)}
        )}    
      </div>
    )
}
