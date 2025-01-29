import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <>
      <footer className='bg-dark text-white py-4'>

<Container>
    <Row>
        <Col lg={3}>
        <h3 className='py-3'>Quick Link</h3>
        <ul>
            <li>Company Profile</li>
           <li> About Us</li>
        <li>FAQ</li>
        <li>Contact Us</li>
        <li>Testimonials</li>
        <li>Terms & Conditions</li>
        </ul>
        </Col>
        <Col lg={3}>
        <h3 className='py-3'>Quick Link</h3>
        <ul>
            <li>Company Profile</li>
           <li> About Us</li>
        <li>FAQ</li>
        <li>Contact Us</li>
        <li>Testimonials</li>
        <li>Terms & Conditions</li>
        </ul>
        </Col>
        <Col lg={3}>
        <h3 className='py-3'>Quick Link</h3>
        <ul>
            <li>Company Profile</li>
           <li> About Us</li>
        <li>FAQ</li>
        <li>Contact Us</li>
        <li>Testimonials</li>
        <li>Terms & Conditions</li>
        </ul>
        </Col>
        <Col lg={3}>
        <h3 className='py-3'>Quick Link</h3>
        <ul>
            <li>Company Profile</li>
           <li> About Us</li>
        <li>FAQ</li>
        <li>Contact Us</li>
        <li>Testimonials</li>
        <li>Terms & Conditions</li>
        </ul>
        </Col>
    </Row>
</Container>
      </footer>
      <section className='bg-success py-4'>
    <Container>
        <Row>
            <Col lg={6}>
            <p className='text-white'>Copyright 2025
            </p>
            </Col>
            <Col lg={6}>
            <p className='text-white text-end'>Design & Developed By: Rupa Karki
            </p>
            </Col>
        </Row>
    </Container>
</section>
    </>
  )
}

export default Footer
