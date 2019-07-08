import React from 'react'

export const ParkCard = (props) => {
  const img = props.park.imgs[Math.floor(Math.random() * props.park.imgs.length)]

  return (
    <div className="card" style={{ width: '25rem' }} onClick={e => props.showPark(props.park)}>
      <img className="card-img-top" style={{ maxHeight: '35rem' }} src={img.url} alt={img.caption} />
      <div className="card-body">
        <h5 className="card-title">{props.park.name}</h5>
        <p className="card-text">{props.park.description}</p>
      </div>
    </div>
  )
}
