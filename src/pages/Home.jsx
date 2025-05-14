import React from 'react';
import { Link } from 'react-router-dom';
import landingImg from '../assets/landingImage2.jpg';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="d-flex justify-content-center align-items-center min-vh-100 text-white  "
        style={{
          backgroundImage: `url(${landingImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(80%)',
        }}
      >
        <Container >
          <Row className="justify-content-center ">
            <Col lg={6} className="p-4 rounded shadow bg-dark bg-opacity-75 text-center">
              <h1 className="display-3">
                <i className="fa-solid fa-dumbbell"></i> Fitness World
              </h1>
              <p className="text-center fs-5 fw-light">
  Your fitness journey starts here! Access expert workout plans, video tutorials, and much more to achieve your health goals. Let’s build a stronger, healthier you—one step at a time!
</p>


{
                localStorage.getItem("token")?
                <Link to={'/workout'} className='btn btn-danger'>Let's Start Your Day</Link>
                :
                <Link to={'/login'} className='btn btn-danger'>Start to explore</Link>
              }

            </Col>
          </Row>
        </Container>
      </div>

      {/* Image Section */}
      {/* <div>
        <img width={'100%'} src="https://wallpapercave.com/wp/wp8235128.jpg" alt="Fitness" />
      </div> */}

      {/* Features Section */}
      <div className="pt-5  bg-black" >
        <Container className='py-5'>
          <h1 className="text-warning mb-4 text-center ">Features</h1>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Img height={'280px'} variant="top" src="https://www.teahub.io/photos/full/276-2763842_cardio-workout-full-hd-gym-workout-hd.jpg" />
                <Card.Body className='bg-secondary text-white'>
                  <Card.Title >All Muscle Training</Card.Title>
                  <Card.Text>
                    Comprehensive workout routines targeting all muscle groups, helping you build strength and endurance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Img height={'280px'} variant="top" src="https://wallpapercave.com/wp/wp2483009.jpg" />
                <Card.Body className='bg-secondary text-white'>
                  <Card.Title>Video Tutorials</Card.Title>
                  <Card.Text >
                    Watch expert-led workout tutorials at your convenience. Perfect for beginners and experienced individuals.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Img height={'280px'} variant="top" src="https://wallpapercave.com/wp/wp4595589.jpg" />
                <Card.Body className='bg-secondary text-white'>
                  <Card.Title>Simple and Effective</Card.Title>
                  <Card.Text>
                    Get a streamlined approach to workouts with minimal time, maximizing results in the shortest period.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Need of Workout Section */}


 <div
  className="py-5 bg-black"
  
>
 

        <Container fluid >
          <Row className="border border-white m-5 p-5 bg-black text-white rounded">
            <Col lg={6} >
              <h4 className="text-center mb-4 mt-3 fw-bold text-danger">Why Workout?</h4>
              <div className='d-flex '>
                <i class="fa-regular fa-circle-dot me-3"></i>
                <p>
                  Regular workouts are essential for maintaining a healthy body and mind. They improve cardiovascular health, build muscle strength, boost mental clarity, and help manage stress. 
                </p>
              </div>

              <div className='d-flex'>
                <i class="fa-regular fa-circle-dot me-3"></i>
                <p>
                  Exercise not only helps you look good but also makes you feel great. It’s the key to enhancing overall well-being, maintaining a healthy weight, and preventing chronic illnesses.
                </p>
              </div>

              <div className='d-flex '>
                <i class="fa-regular fa-circle-dot me-3"></i>
                <p>
                  Whether you're looking to lose weight, gain muscle, or just stay fit, a proper workout routine is the foundation of a healthy lifestyle.
                </p>
              </div>

              <p className='text-success mt-3'>
                Join our community and embark on a journey toward better health and fitness. Start with small steps and stay consistent—results will follow!
              </p>
            </Col>
            <Col lg={6}>
            <iframe 
  width="100%" 
  height="400" 
  src="https://www.youtube.com/embed/rBUjOY12gJA?si=rLQj5bJihqA9DQqJ&autoplay=1&mute=1" 
  title="Workout Video" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
/>

            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
