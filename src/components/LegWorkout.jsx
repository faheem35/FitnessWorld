import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const LegWorkout = () => {
          return (
                    <div >
                              <Card style={{ width: '18rem' }} >

                                        <Link to="/workoutList/leg">
                                                  <Card.Img className='img-fluid' style={{ height: '12rem' }} variant="top" src="https://149874912.v2.pressablecdn.com/wp-content/uploads/2023/11/Leg-Day-Workout.jpg" />
                                        </Link>

                                        <Card.Body className='bg-secondary'>
                                                  <Card.Title className='text-white text-center'>Leg</Card.Title>
                                        </Card.Body>
                              </Card>

                    </div>
          )
}

export default LegWorkout
