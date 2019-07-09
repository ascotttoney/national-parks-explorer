import React from 'react'
import { GiDirectionSign } from 'react-icons/gi'


export default class ParkCard extends React.PureComponent {
  render() {
    const img = this.props.park.imgs[Math.floor(Math.random() * this.props.park.imgs.length)]
    return (
      <div className="m-1 card" style={{ width: '25rem' }} onClick={e => this.props.showPark(this.props.park)}>
        <img className="p-2 card-img-top" style={{ maxHeight: '35rem', borderRadius: "10px" }} src={img.url} alt={img.caption} />
        <div className="card-body">
          <h5 className="card-title"><GiDirectionSign /> {this.props.park.name}</h5>
          <p className="card-text">{this.props.park.description}</p>
        </div>
      </div>
    )
  }
}
