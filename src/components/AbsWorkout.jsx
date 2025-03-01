import React, { useEffect, useState } from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { allWorkoutsUsersideAPI } from '../services/allAPI';
import SERVER_URL from '../services/serverURL';


const AbsWorkout = () => {
         
        
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
        const filteredData = result.data.filter(item => item.muscleName.trim() === 'Abs');
        console.log("Filtered Data:", filteredData);
        setAllWorkouts(filteredData);
      }
    } catch (err) {
      console.log("API Error:", err);
    }
  };

  // const handleShow = (videoUrl) => {
  //   setSelectedVideo(videoUrl);
  //   setShow(true);
  // };

  const handleShow = (videoUrl) => {
    let videoId = "";
  
    // Check if it's a short YouTube URL (e.g., https://youtu.be/VIDEO_ID)
    if (videoUrl.includes("youtu.be")) {
      videoId = videoUrl.split("/").pop().split("?")[0]; 
    } 
    // Check if it's a normal YouTube URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID)
    else if (videoUrl.includes("youtube.com/watch")) {
      const urlParams = new URLSearchParams(new URL(videoUrl).search);
      videoId = urlParams.get("v");
    }
  
    // Construct the embeddable URL
    const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : videoUrl;
  
    setSelectedVideo(embedUrl);
    setShow(true);
  };
  
  const handleClose = () => {
          setSelectedVideo(null); 
          setShow(false);
        };
        

  return (
    <>
      <h1 className="text-white text-center my-5">Abs Workouts</h1>

      {allWorkouts.length > 0 ? (
        allWorkouts.map(workout => (
          <div key={workout._id} className="border rounded container bg-white my-3">
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
                  <h4 className="text-black mt-5">{workout.workoutName}</h4>
                  <p>*{workout.count}</p>
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

export default AbsWorkout