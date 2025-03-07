import React, { useEffect, useState } from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { allWorkoutsUsersideAPI } from '../services/allAPI';
import SERVER_URL from '../services/serverURL';

const LegWorkout = () => {
         
          const [allWorkouts, setAllWorkouts] = useState([]);
          const [show, setShow] = useState(false);
          const [selectedVideo, setSelectedVideo] = useState("");
        
          useEffect(() => {
            getAllWorkouts();
          }, []);
        
          const getAllWorkouts = async () => {
            try {
              const result = await allWorkoutsUsersideAPI();
              console.log("API Response:", result);
        
              if (result.status === 200) {
                // Filter chest workouts
                const filteredData = result.data.filter(item => item.muscleName.trim() === 'Legs');
                console.log("Filtered Data:", filteredData);
                setAllWorkouts(filteredData);
              }
            } catch (err) {
              console.log("API Error:", err);
            }
          };
        
          const handleShow = (videoUrl) => {
            setSelectedVideo(videoUrl);
            setShow(true);
          };
        
          const handleClose = () => {
                    setSelectedVideo(null); 
                    setShow(false);
                  };
                  
        
          return (
            <>
             <div className='bg-black' style={{ minHeight: "75vh" }}>
                <h1 className="text-danger text-center py-5">Leg Workouts</h1>
          
                {allWorkouts.length > 0 ? (
                  allWorkouts.map(workout => (
                    <div key={workout._id} className="border rounded container bg-white my-4">
                      <Container>
                        <Row className="align-items-center justify-content-between text-center text-md-start">
                          {/* Image Section */}
                          <Col xs={12} md={4} className="d-flex align-items-center justify-content-center justify-content-md-start">
                            <img
                              width="100px"
                              src={`${SERVER_URL}/uploads/${workout?.workoutImg}`}
                              alt={workout.workoutName}
                            />
                          </Col>
          
                          {/* Text Section */}
                          <Col xs={12} md={4} className="text-center text-md-start">
                            <h4 className="text-black mt-4">{workout.workoutName}</h4>
                            <p className='text-danger fw-bold'>*{workout.count}</p>
                          </Col>
          
                         
                           {/* Watch Demo Section */}
                                       <Col xs={12} md={4} className="text-center text-md-end">
                                       <p onClick={() => handleShow(workout.tutorialLink)} className="text-primary fw-bold" style={{ cursor: "pointer" }}>
            Watch Tutorial
          </p>
          
                                       </Col>
                        </Row>
                      </Container>
                    </div>
                  ))
                ) : (
                  <div className="text-white text-center">No workouts found</div>
                )}
          
             </div>
              {/* Modal for video */}
              <Modal size="xl" centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Workout Tutorial</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {selectedVideo && (
  <iframe 
    width="100%" 
    height="700" 
    src={selectedVideo} 
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen
  ></iframe>
)}

        
                 
                 </Modal.Body>
              </Modal>
            </>
          );
}

export default LegWorkout
 