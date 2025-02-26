import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ShoulderWorkout = () => {
          return (
                    <div>
                              <Card style={{ width: '18rem' }}>


                                        <Link to="/workoutList/shoulder">
                                                  <Card.Img className='img-fluid' style={{ height: '12rem' }} variant="top" src="https://cdn.prod.website-files.com/611abd833ca7af7702667729/665bd31f06cc423e5a2bb676_Blog_23_FitResults_CableWorkout.jpg" />
                                        </Link>

                                        <Card.Body className='bg-secondary'>
                                                  <Card.Title className='text-white text-center'>Shoulder</Card.Title>
                                        </Card.Body>
                              </Card>
                    </div>
          )
}

export default ShoulderWorkout