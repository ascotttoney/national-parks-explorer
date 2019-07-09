
import React, { Component } from 'react'
import { ParkCard } from '../components/ParkCard';
import { Route } from 'react-router-dom'

export const PastVisit = (props) => {

  return (
    <div>
      {props.pastVisits.map(visit =>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            {/* <img className="card-img-top" src={selectedPark ? selectedPark.imgs[0]: null}/> */}
            {/* <img className="card-img-top" src={props.parks.find(p => p.id === visit.park_id).imgs[0].url} /> */}
            {/* <img className="card-img-top" src={props.parks.find(p=> console.log(p) )}/> */}
            <h3 className="card-title">{visit.title}</h3>
            <p className="card-text">{visit.description}</p>
          </div>
        </div>
      )}
    </div>
  )
}