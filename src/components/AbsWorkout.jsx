import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const AbsWorkout = () => {
          return (
                    <div>
                              <Card style={{ width: '18rem' }}>

                                        <Link to="/workoutList/abs">
                                                  <Card.Img className='img-fluid' style={{ height: '12rem' }} variant="top" src="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2024/04/ab-exercises-scaled.jpg?fit=2560%2C1709&ssl=1" />
                                        </Link>

                                        <Card.Body className='bg-secondary'>
                                                  <Card.Title className='text-white text-center'>Abs</Card.Title>
                                        </Card.Body>
                              </Card>
                    </div>
          )
}

export default AbsWorkout