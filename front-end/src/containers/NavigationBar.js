import React from 'react'
import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap'
import styled from 'styled-components'
import { MDBFormInline, MDBIcon } from "mdbreact";

const Styles = styled.div`
  .navbar{
    background-color: #222;
  }

  .navbar-brand, .navbar-nav .nav-link{
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = (props) => (
  <Styles>
    <Navbar expand="sm">
      <Navbar.Brand href="/">NATIONAL PARKS EXPLORER</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className='mr-auto'>
          <Nav.Item><Nav.Link href="/">Map</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/parks">Parks</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/visits">Visits</Nav.Link></Nav.Item>
          {props.loggedIn ?
            <Nav.Item><Nav.Link href="/" onClick={props.handleLogout}>Logout</Nav.Link></Nav.Item> :
            <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
          }
        </Nav>
      </Navbar.Collapse>
      <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
      <Nav className="ml-auto">
        <MDBFormInline>
          <input type="text" placeholder="Search" aria-label="Search" onChange={e => props.searchChange(e)} />
        </MDBFormInline>
      </Nav>
    </Navbar>
  </Styles>
)
