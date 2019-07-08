import React from 'react'
import { Button } from 'react-bootstrap'
import Gallery from 'react-awesome-slider'
import styles from '../galleryStyles.scss'

export const ParkDetails = (props) => {
  const { url, fullname, states, description, weatherInfo, imgs } = props.park
  return (
    <div className="container">
      <div className="page-header">
        <h1 className="text-center"><a href={url}>{fullname}</a></h1>
      </div>
      <Gallery cssModule={styles}>
        {imgs.map(img => <div data-src={img.url} />)}
      </Gallery>
      <div className="pt-4 text-dark">
        <h5>Park State: {states}</h5>
        <p>{description}</p>
        <p>{weatherInfo}</p>
        <Button type="button" className="btn btn-primary" onClick={props.backToParks}>Back</Button>
      </div >
    </div >
  )
}
