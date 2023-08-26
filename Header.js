import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import  Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import DoctorRegister from './DoctorRegister'
const Header = () => {
  return (
    <>
          <Navbar bg="dark" data-bs-theme="dark">
<Container>
  <Navbar.Brand href="#home">UserRegristration</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="./">Home</Nav.Link>
    <Nav.Link href="#features">Features</Nav.Link>
  </Nav>
</Container>
</Navbar></>
  )
}

export default Header