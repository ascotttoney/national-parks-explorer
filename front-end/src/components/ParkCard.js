import React from 'react'

export const ParkCard = (props) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.park.name}</h5>
        <p className="card-text">{props.park.description}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}
