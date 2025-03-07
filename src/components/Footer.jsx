


import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='bg-black text-white py-5'>
      <Container>
        <Row className='gy-4'>
          {/* Intro Section */}
          <Col md={6} lg={4}>
            <h5 >
              <i className='fa-solid fa-dumbbell me-2'></i>
              Fitness World
            </h5>
            <p>
              Designed and built with all the love in the world by the Fitness World team with the help of our contributors.
            </p>
            <p>Code licensed MIT, docs CC BY 3.0.</p>
            <p>Currently v5.3.3.</p>
          </Col>

          {/* Links Section */}
          <Col md={6} lg={2}>
            <h5>Links</h5>
            <div className='d-flex flex-column'>
              <Link to={'/'} className='text-white text-decoration-none'>Home Page</Link>
              <Link to={'/login'} className='text-white text-decoration-none'>Login Page</Link>
              <Link to={'/register'} className='text-white text-decoration-none'>Register Page</Link>
            </div>
          </Col>

          {/* Guides Section */}
          <Col md={6} lg={2}>
            <h5>Guides</h5>
            <div className='d-flex flex-column'>
              <a href='https://react.dev/' className='text-white text-decoration-none' target='_blank' rel='noopener noreferrer'>React</a>
              <a href='https://react-bootstrap.github.io/' className='text-white text-decoration-none' target='_blank' rel='noopener noreferrer'>React Bootstrap</a>
              <a href='https://reactrouter.com/' className='text-white text-decoration-none' target='_blank' rel='noopener noreferrer'>React Router</a>
            </div>
          </Col>

          {/* Contact Section */}
          <Col md={6} lg={3}>
            <h5>Contacts</h5>
            <Form className='d-flex'>
              <Form.Control type='email' placeholder='Enter Your Email Here...' className='me-2'/>
              <Button variant='danger'>
                <i className='fa-solid fa-arrow-right'></i>
              </Button>
            </Form>
            <div className='d-flex justify-content-between mt-3'>
              <a href='https://x.com/__x' className='text-white text-decoration-none' target='_blank' rel='noopener noreferrer'>
                <i className='fa-brands fa-x-twitter'></i>
              </a>
              <a href='https://www.instagram.com/' className='text-white text-decoration-none' target='_blank' rel='noopener noreferrer'>
                <i className='fa-brands fa-instagram'></i>
              </a>
              <a href='https://www.facebook.com/' className='text-white text-decoration-none' target='_blank' rel='noopener noreferrer'>
                <i className='fa-brands fa-facebook'></i>
              </a>
              <a href='#' className='text-white text-decoration-none'>
                <i className='fa-solid fa-phone'></i>
              </a>
              <a href='https://in.linkedin.com/' className='text-white text-decoration-none' target='_blank' rel='noopener noreferrer'>
                <i className='fa-brands fa-linkedin'></i>
              </a>
            </div>
          </Col>
        </Row>
        <p className='text-center mt-4'>Copyright © Fitness World Inc. All rights reserved.</p>
      </Container>
    </div>
  );
};

export default Footer;
