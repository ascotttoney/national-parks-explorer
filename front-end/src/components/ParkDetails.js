import React from 'react'
import { Button } from 'react-bootstrap'
import Gallery from 'react-awesome-slider'
import styles from '../galleryStyles.scss'

export const ParkDetails = (props) => {
  const { url, fullname, states, description, weatherInfo, latLong, imgs } = props.park
  return (
    <div className="container">
      <div className="page-header">
        <h1><a href={url}>{fullname}</a></h1>
      </div>
      <Gallery cssModule={styles}>
        {imgs.map(img => <div data-src={img.url} />)}
      </Gallery>
      <h4>Park State: {states}</h4>
      <p>{description}</p>
      <p>{weatherInfo}</p>
      <p>{latLong}</p>
      <Button type="button" className="btn btn-primary" onClick={props.backToParks}>Back To All Parks</Button>
    </div>
  )
}
