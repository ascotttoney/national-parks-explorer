import React from 'react'
import { GiDirectionSign } from 'react-icons/gi'
import { Button } from 'react-bootstrap'


export default class ParkCard extends React.PureComponent {
  render() {
    const img = this.props.park.imgs[Math.floor(Math.random() * this.props.park.imgs.length)]
    return (
      <div className="m-1 card" style={{ width: '25rem' }}>
        <img className="p-2 card-img-bottom" onClick={e => this.props.showPark(this.props.park)} style={{ maxHeight: '35rem', borderRadius: "10px" }} src={img.url} alt={img.caption} />
        <div className="card-body">
          <h5 className="card-title"><GiDirectionSign /> {this.props.park.name}</h5>
        </div>
        <Button type="button" className="btn btn-success m-1" onClick={e => this.props.logPastVisit()} >Log Past Visit</Button>
        <Button type="button" className="btn btn-warning m-1" onClick={e => this.props.planNewVisit()}>Plan New Visit</Button>
      </div>
    )
  }
}
