import React, { useState } from 'react'
import ReactMap, { Marker } from 'react-map-gl';
import 'mapbox-gl/src/css/mapbox-gl.css'

export const Map = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 38.560954,
    longitude: -98.935240,
    zoom: 4,
    width: '90vw',
    height: '85vh'
  })

  const parkMarker = park => {
    const lat = park.latLong.slice(4).split(", long:").map(num => parseFloat(num))[0]
    const long = park.latLong.slice(4).split(", long:").map(num => parseFloat(num))[1]
    return (
      <Marker
        key={park.id}
        latitude={lat}
        longitude={long}
      >
        <button className="marker-btn" >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1d/US-NationalParkService-Logo.svg"
            alt="Park Logo" />
        </button>
      </Marker>
    )
  }

  return (
    <div>
      <ReactMap
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiaGFueHUyNyIsImEiOiJjanh1ajF5bTIxNXZhM2xyczF4cXN4ZjJqIn0.058kHvghPXmU2LOnp_9bwA"
        mapStyle='mapbox://styles/hanxu27/cjxujyxc99bwq1cs1kk4duz8a'
        onViewportChange={viewport => setViewport(viewport)}
      >
        {props.parks.map(parkMarker)}
      </ReactMap>
    </div >
  )
}
