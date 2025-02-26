// 

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header';
import LegWorkout from '../components/LegWorkout';
import ChestWorkout from '../components/ChestWorkout';
import ShoulderWorkout from '../components/ShoulderWorkout';
import { Container } from 'react-bootstrap';
import AbsWorkout from '../components/AbsWorkout';
import { Link } from 'react-router-dom';

const Workout = () => {
  //getting name from local storage
  const name = JSON.parse(localStorage.getItem("user"))?.name?.split(" ")[0];

  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className="container-fluid">
  
        <h1>Welcome <span className="text-warning">{name},</span></h1>

        
        <Container>
          <Row>
            <Col> <LegWorkout /> </Col>
            <Col> <ChestWorkout /> </Col>
            <Col> <ShoulderWorkout/> </Col>
          </Row>

          <Row className="mt-5">
            <Col> <AbsWorkout/> </Col>
          </Row>

        </Container>
      </div>
    </>
  );
};

export default Workout;
