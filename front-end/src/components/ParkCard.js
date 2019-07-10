import React from 'react'
import { GiDirectionSign } from 'react-icons/gi'
import { Container, Card, CardColumns, Button } from 'react-bootstrap'

export default class ParkCard extends React.PureComponent {
  render() {
    const img = this.props.park.imgs[Math.floor(Math.random() * this.props.park.imgs.length)]

    return (
      <div>
        <Card>
          <img
            className="p-2 card-img-bottom"
            onClick={(e) => this.props.showPark(this.props.park)}
            style={{ maxHeight: '35rem', borderRadius: "10px" }}
            src={img.url} alt={img.caption} />

          <div className="card-body">
            <h4 className="card-title"> <GiDirectionSign /> {this.props.park.name} </h4>
          </div>

          <Button
            type="button"
            className="btn btn-success m-2"
            onClick={e => this.props.logPastVisit(this.props.park)} >Log Past Visit</Button>

          <Button
            type="button"
            className="btn btn-warning m-2"
            onClick={e => this.props.planNewVisit(this.props.park)}>Plan New Visit</Button>

        </Card>
      </div>
    )
  }
}
