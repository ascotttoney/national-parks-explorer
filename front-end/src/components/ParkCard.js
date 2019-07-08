import React from 'react'

export const ParkCard = (props) => {
  return (
    <div className="card" style={{ width: '18rem' }} onClick={e => props.showPark(props.park)}>
      <img className="card-img-top" src={props.park.imgs[0].url} alt={props.park.imgs[0].caption} />
      <div className="card-body">
        <h5 className="card-title">{props.park.name}</h5>
        <p className="card-text">{props.park.description}</p>
      </div>
    </div>
  )
}
