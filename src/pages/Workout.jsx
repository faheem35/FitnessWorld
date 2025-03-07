

import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Workout = () => {

  

 

  //getting name from local storage

  const [userName, setUserName]=useState("")

  useEffect(()=>{
    if(localStorage.getItem("user")){
      setUserName(JSON.parse(localStorage.getItem("user")).name.split(" ")[0])
    }
  },[])


  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className="container-fluid bg-black ">

        <h1 className='text-white mb-4'>Welcome <span className="text-warning">{userName},</span></h1>


        <Container >




          <Row>
  {/* col 1 */}
            <Col><Card style={{ width: '18rem' }} >

           
               <Link to={"/workout/absWorkout"}>
                  <Card.Img className='img-fluid' style={{ height: '12rem' }} variant="top" src="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2024/04/ab-exercises-scaled.jpg?fit=2560%2C1709&ssl=1" />
           
               </Link>

              <Card.Body className='bg-light'>
                <Card.Title className='text-black text-center'>Abs</Card.Title>
              </Card.Body>
            </Card></Col>
 {/* col 2 */}
            <Col><Card style={{ width: '18rem' }}  >

            <Link to={"/workout/chestWorkout"}>
              
                  <Card.Img className='img-fluid' style={{ height: '12rem' }} variant="top" src="https://fitclub.in/blog/wp-content/uploads/2023/02/The-Ultimate-Guide-To-Chest-Workout-For-Beginner7.jpg" />
               
            </Link>

              <Card.Body className='bg-light'>
                <Card.Title className='text-black text-center'>Chest</Card.Title>
              </Card.Body>
            </Card></Col>
 {/* col 3 */}
            <Col><Card style={{ width: '18rem' }} >

             
                <Link to={"/workout/legWorkout"}>
                  <Card.Img className='img-fluid' style={{ height: '12rem' }} variant="top" src="https://149874912.v2.pressablecdn.com/wp-content/uploads/2023/11/Leg-Day-Workout.jpg" />
                
  
                </Link>
              <Card.Body className='bg-light'>
                <Card.Title className='text-black text-center'>Legs</Card.Title>
              </Card.Body>
            </Card></Col>


          </Row>

          <Row className="mt-5 ">
    {/* col 4 */}
            <Col><Card style={{ width: '18rem' }} >

              
               <Link to={"/workout/shoulderWorkout"}>
                  <Card.Img className='img-fluid' style={{ height: '12rem' }} variant="top" src="https://cdn.prod.website-files.com/611abd833ca7af7702667729/665bd31f06cc423e5a2bb676_Blog_23_FitResults_CableWorkout.jpg" />
               
               </Link>

              <Card.Body className='bg-white'>
                <Card.Title className='text-black text-center'>Shoulders</Card.Title>
              </Card.Body>
            </Card></Col>
          </Row>

        </Container>
      </div>
    </>
  );
 
};

export default Workout;