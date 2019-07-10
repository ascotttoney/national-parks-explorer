import React, { Component } from 'react'
import { ParkCard } from '../components/ParkCard'
import { Route } from 'react-router-dom'

export const PastVisit = (props) => {
  // console.log(props)
    return (
      <div>
        {props.pastVisits.map(visit => {
                   const img = visit.park.park_images[Math.floor(Math.random() * visit.park.park_images.length)]
         return  (
         <div className="m-1 card" 
              style={{background: 'rgb(216, 110, 110)', maxHeight: '35rem', width: '89rem', borderRadius: "20px" }}>
           <div className="card-body">           
              <h2 className="card-title">{`Park: ${visit.park.name}`}</h2>
              <img className="p-2 card-img-bottom" 
                    style={{ width: '70rem', maxHeight: '20rem', borderRadius: "10px" }} 
                    src={img.url}/>

              <h3>{ `Title: ${visit.title}` }</h3>
              <h3>{ `Name: ${visit.user.userName}` }</h3>
              <h3>{ `Season: ${visit.season}: ${visit.year}` }</h3>
              <p className="card-text">{visit.description }</p>
            </div>
          </div> )}
        )}
      </div>
    )
}