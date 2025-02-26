import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const ChestWorkout = () => {
          return (
                    <div>
                              <Card style={{ width: '18rem' }}>

                                        <Link to="/workoutList/chest">
                                                  <Card.Img className='img-fluid' style={{ height: '12rem' }} variant="top" src="https://fitclub.in/blog/wp-content/uploads/2023/02/The-Ultimate-Guide-To-Chest-Workout-For-Beginner7.jpg" />
                                        </Link>

                                        <Card.Body className='bg-secondary'>
                                                  <Card.Title className='text-white text-center'>Chest</Card.Title>
                                        </Card.Body>
                              </Card>
                    </div>
          )
}

export default ChestWorkout