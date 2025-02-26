
import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import SERVER_URL from '../services/serverURL';
import { updateWorkoutAPI } from '../services/allAPI';
import { editWorkoutResponseContext } from '../contexts/ContextApi';


const EditWorkout = ({ workout }) => {
  const {editWorkoutResponse, setEditWorkoutResponse}=useContext(editWorkoutResponseContext)

  const [preview, setPreview] = useState("");
  const [imageFileStatus, setImageFileStatus] = useState(false);
  const [workoutDetails, setWorkoutDetails] = useState({
    id: workout._id,
    muscleName: workout.muscleName,
    workoutName: workout.workoutName,
    count: workout.count,
    workoutImg: "",
    tutorialLink: workout.tutorialLink,
  });
  console.log(workoutDetails);
  

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (workoutDetails.workoutImg && (workoutDetails.workoutImg.type === "image/png"|| workoutDetails.workoutImg.type === "image/jpeg" || workoutDetails.workoutImg.type === "image/gif")) {
      setImageFileStatus(true);
      setPreview(URL.createObjectURL(workoutDetails.workoutImg));
    } else {
      setImageFileStatus(false);
      setPreview("");
      setWorkoutDetails({ ...workoutDetails, workoutImg: "" });
    }
  }, [workoutDetails.workoutImg]);

  const handleClose = () => {
    setShow(false);
    setWorkoutDetails({
      id: workout._id,
      muscleName: workout.muscleName,
      workoutName: workout.workoutName,
      count: workout.count,
      workoutImg: "",
      tutorialLink: workout.tutorialLink,
    });
  };

  const handleShow = () => {
    setShow(true);
    setWorkoutDetails({
      id: workout._id,
      muscleName: workout.muscleName,
      workoutName: workout.workoutName,
      count: workout.count,
      workoutImg: "",
      tutorialLink: workout.tutorialLink,
    });
  };

  const handleUpdateWorkout = async () => {
    const { id, muscleName, workoutName, count, workoutImg, tutorialLink } = workoutDetails;

    if (muscleName && workoutName && count && tutorialLink) {
      const reqBody = new FormData();
      reqBody.append("muscleName", muscleName);
      reqBody.append("workoutName", workoutName);
      reqBody.append("count", count);
      reqBody.append("tutorialLink", tutorialLink);
      preview ? reqBody.append("workoutImg", workoutImg) : reqBody.append("workoutImg", workout.workoutImg);

      const token = localStorage.getItem('adminToken');
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        };

        try {
          const result = await updateWorkoutAPI(id, reqBody, reqHeader);
          if (result.status === 200) {
            alert("Workout updated successfully!");
            handleClose();
            setEditWorkoutResponse(result);
          }
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      alert("Please fill the form completely!");
    }
  };

  return (
    <>
      <button onClick={handleShow} className='btn'><i className='fa-solid fa-edit'></i></button>

      <Modal centered size='lg' show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update Workout Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row align-items-center'>
            <div className='col-lg-4'>
              <label>
                <input onChange={e => setWorkoutDetails({ ...workoutDetails, workoutImg: e.target.files[0] })} type="file" style={{ display: 'none' }} />
                <img height={'200px'} className='img-fluid' src={preview ? preview : `${SERVER_URL}/uploads/${workout.workoutImg}`} alt="" />
              </label>
              {!imageFileStatus &&
                <div className='text-warning fw-bolder my-2'>
                  *Upload only JPEG, GIF or PNG files!
                </div>
              }
            </div>
            <div className='col-lg-8'>
              <div className='mb-2'>
                <input value={workoutDetails.muscleName} onChange={e => setWorkoutDetails({ ...workoutDetails, muscleName: e.target.value })} type="text" placeholder='Muscle Name' className='form-control' />
              </div>
              <div className='mb-2'>
                <input value={workoutDetails.workoutName} onChange={e => setWorkoutDetails({ ...workoutDetails, workoutName: e.target.value })} type="text" placeholder='Workout Name' className='form-control' />
              </div>
              <div className='mb-2'>
                <input value={workoutDetails.count} onChange={e => setWorkoutDetails({ ...workoutDetails, count: e.target.value })} type="text" placeholder='Workout Count' className='form-control' />
              </div>
              <div className='mb-2'>
                <input value={workoutDetails.tutorialLink} onChange={e => setWorkoutDetails({ ...workoutDetails, tutorialLink: e.target.value })} type="text" placeholder='Tutorial Link' className='form-control' />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpdateWorkout} variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditWorkout;
