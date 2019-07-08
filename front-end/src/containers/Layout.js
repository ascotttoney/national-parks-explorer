import React from 'react'
import { Container } from 'react-bootstrap';

export const Layout = (props) => {
  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}
