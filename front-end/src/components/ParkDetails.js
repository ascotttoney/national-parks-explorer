import React from 'react'
import { Button } from 'react-bootstrap'
import Gallery from 'react-awesome-slider'
import styles from '../galleryStyles.scss'
import { FaMap } from 'react-icons/fa'
import { GiPineTree } from 'react-icons/gi'

export const ParkDetails = (props) => {
  const { url, fullname, states, description, weatherInfo, imgs } = props.park
  return (
    <div className="container">
      <div className="page-header">
        <h1 className="text-center"><GiPineTree /><a href={url} target="_blank" rel="noopener noreferrer"> {fullname}</a> <GiPineTree /></h1>
      </div>
      <Gallery cssModule={styles} >
        {imgs.map(img => <div key={img.id} data-src={img.url} />)}
      </Gallery>
      <div className="pt-4 text-dark">
        <h6><FaMap /> {states}</h6>
        <p>{description}</p>
        <p>{weatherInfo}</p>
        <Button type="button" className="btn btn-primary" onClick={props.backToParks}>Back</Button>
        <Button type="button" className="btn btn-success m-1" >Log Past Trip</Button>
        <Button type="button" className="btn btn-warning m-1" >Plan New Trip</Button>
      </div >
    </div >
  )
}
