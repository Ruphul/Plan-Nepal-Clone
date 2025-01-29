import React from 'react'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

function Header() {
  return (
    <>
      <section className="bg-success text-white py-2 d-none d-lg-block">
        <Container>
            <Row>
                <Col lg={3} className='offset-lg-2'>Agency for Tour & Trekking in Nepal</Col>
                <Col lg={3}>
                <ul className='d-flex justify-content-lg-center gap-2'>
                    <li>f</li>
                    <li>f</li>
                    <li>f</li>
                    <li>f</li>
                    <li>f</li>
                    <li>f</li>
                </ul>
                </Col>
                <Col lg={4}>
                <ul className='d-flex justify-content-lg-end gap-2'>
                    <li> +977-1-4435300 </li> 
                    <li>info@plannepal.com</li>
                </ul>
                </Col>
             
            </Row>
        </Container>
        
      </section>

      <section>

      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src="https://www.plannepal.com/assets/img/plannepal.gif?ver=1464028232" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">services</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </section>

      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default Header
