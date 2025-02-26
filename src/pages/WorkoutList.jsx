import React, { useState } from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const WorkoutList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <h1 className="text-white text-center my-5">Workouts</h1>

      <div className='border rounded container bg-white'>
        <Container className="bg-white  ">
          <Row className="align-items-center justify-content-between text-center text-md-start">
            {/* Image Section */}
            <Col xs={12} md={4} className="d-flex align-items-center justify-content-center justify-content-md-start">
              <img width="100px" src="https://media.tenor.com/mXQJeQyJCi4AAAAM/bench-press-regular-bench-press.gif" alt="Dumbbell Press" />
            </Col>
  
            {/* Text Section */}
            <Col xs={12} md={4} className="text-center text-md-start">
              <h4 className="text-black mt-5">Dumbbell Press</h4>
              <p>*16</p>
            </Col>
  
            {/* Watch Demo Section */}
            <Col xs={12} md={4} className="text-center text-md-end">
              <p  onClick={handleShow} className="text-primary fw-bold " style={{cursor:"pointer"}}>Watch Tutorial</p>
            </Col>
          </Row>
        </Container>
        
      </div>
      

      <Modal size='xl' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="700" src="https://www.youtube.com/embed/QsYre__-aro?si=zbYKVZYgu1wbvBVM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        </Modal.Body>
        
      </Modal>
    </>
  );
};

export default WorkoutList;
