

// import React, { useState } from "react";
// import { Form, Button, Container, Image, Row, Col } from "react-bootstrap";
// import { adminAddWorkoutAPI } from "../services/allAPI";

// const muscleGroups = ["Chest", "Abs", "Legs", "Shoulders"];

// const AdminAddWorkout = () => {
//   const [workoutData, setWorkoutData] = useState({
//     muscleName: "",
//     workoutName: "",
//     count: "",
//     workoutImg: null,
//     preview: "",
//     tutorialLink: "",
//   });

//   const handleMuscleSelect = (muscle) => {
//     setWorkoutData({ ...workoutData, muscleName: muscle });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setWorkoutData({ ...workoutData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       const validTypes = ["image/jpeg", "image/png", "image/gif"];
//       if (!validTypes.includes(file.type)) {
//         alert("Please upload a valid image file (JPEG, PNG, GIF)!");
//         return;
//       }

//       if (file.size > 5 * 1024 * 1024) {
//         alert("File size should be less than 5MB!");
//         return;
//       }

//       const previewUrl = URL.createObjectURL(file);
//       setWorkoutData({ ...workoutData, workoutImg: file, preview: previewUrl });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { muscleName, workoutName, count, tutorialLink, workoutImg } = workoutData;
//     if (muscleName && workoutName && count && tutorialLink && workoutImg) {
//       const reqBody = new FormData();
//       reqBody.append("muscleName", muscleName);
//       reqBody.append("workoutName", workoutName);
//       reqBody.append("count", count);
//       reqBody.append("tutorialLink", tutorialLink);
//       reqBody.append("workoutImg", workoutImg);

//       const token = localStorage.getItem("adminToken");
//       if (token) {
//         const reqHeader = {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         };

//         try {
//           const result = await adminAddWorkoutAPI(reqBody, reqHeader);
//           if (result.status === 200) {
//             alert("Workout added successfully!");
//             setWorkoutData({
//               muscleName: "",
//               workoutName: "",
//               count: "",
//               workoutImg: null,
//               preview: "",
//               tutorialLink: "",
//             });
//           } else {
//             alert(result.response.data);
//           }
//         } catch (err) {
//           console.error(err);
//         }
//       }
//     } else {
//       alert("Please fill in all fields.");
//     }
//   };

//   return (
//    <div className="bg-dark" style={{minHeight:"100vh"}}>
//       <Container className="pt-4">
//         <h2 className="text-center mb-4 text-danger fw-bold">New Workout</h2>
//         <Form onSubmit={handleSubmit}>
//           <Row className="mb-4 text-center">
//             <Col xs={12}>
//               <Form.Label className="text-white fw-bold">Select Muscle:</Form.Label>
//             </Col>
//             <Col xs={12} className="d-flex flex-wrap justify-content-center gap-2">
//               {muscleGroups.map((muscle) => (
//                 <Button
//                   key={muscle}
//                   variant={workoutData.muscleName === muscle ? "warning" : "outline-secondary"}
//                   onClick={() => handleMuscleSelect(muscle)}
//                 >
//                   {muscle}
//                 </Button>
//               ))}
//             </Col>
//           </Row>
  
//           <Row className="mb-4">
//             <Col md={6} className="mb-3">
//               <Form.Group>
//                 <Form.Label className="text-white">Name of Workout:</Form.Label>
//                 <Form.Control type="text" name="workoutName" value={workoutData.workoutName} onChange={handleChange} required />
//               </Form.Group>
//             </Col>
//             <Col md={6} className="mb-3">
//               <Form.Group>
//                 <Form.Label className="text-white">Count of Exercise:</Form.Label>
//                 <Form.Control type="number" name="count" value={workoutData.count} onChange={handleChange} required />
//               </Form.Group>
//             </Col>
//           </Row>
  
//           <Row className="mb-4">
//             <Col md={6} className="mb-3">
//               <Form.Group>
//                 <Form.Label className="text-white">Workout Image:</Form.Label>
//                 <Form.Control type="file" onChange={handleFileChange} accept="image/jpeg, image/png, image/gif" required />
//               </Form.Group>
//             </Col>
//             <Col md={6} className="d-flex justify-content-center align-items-center">
//               {workoutData.preview && <Image src={workoutData.preview} alt="Workout" thumbnail width="200px" />}
//             </Col>
//           </Row>
  
//           <Row className="mb-4">
//             <Col xs={12}>
//               <Form.Group>
//                 <Form.Label className="text-white">Demo Tutorial URL:</Form.Label>
//                 <Form.Control type="url" name="tutorialLink" value={workoutData.tutorialLink} onChange={handleChange} required />
//               </Form.Group>
//             </Col>
//           </Row>
  
//           <Row>
//             <Col className="text-center">
//               <Button variant="success" type="submit" className="w-50 w-md-25">
//                 Add Workout
//               </Button>
//             </Col>
//           </Row>
//         </Form>
//       </Container>
//    </div>
//   );
// };

// export default AdminAddWorkout;



import React, { useState } from "react";
import { Form, Button, Container, Image, Row, Col, Card } from "react-bootstrap";
import { adminAddWorkoutAPI } from "../services/allAPI";

const muscleGroups = ["Chest", "Abs", "Legs", "Shoulders"];

const AdminAddWorkout = () => {
  const [workoutData, setWorkoutData] = useState({
    muscleName: "",
    workoutName: "",
    count: "",
    workoutImg: null,
    preview: "",
    tutorialLink: "",
  });

  const handleMuscleSelect = (muscle) => {
    setWorkoutData({ ...workoutData, muscleName: muscle });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkoutData({ ...workoutData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validTypes.includes(file.type)) {
        alert("Please upload a valid image file (JPEG, PNG, GIF)!");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("File size should be less than 5MB!");
        return;
      }
      const previewUrl = URL.createObjectURL(file);
      setWorkoutData({ ...workoutData, workoutImg: file, preview: previewUrl });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { muscleName, workoutName, count, tutorialLink, workoutImg } = workoutData;
    if (muscleName && workoutName && count && tutorialLink && workoutImg) {
      const reqBody = new FormData();
      reqBody.append("muscleName", muscleName);
      reqBody.append("workoutName", workoutName);
      reqBody.append("count", count);
      reqBody.append("tutorialLink", tutorialLink);
      reqBody.append("workoutImg", workoutImg);

      const token = localStorage.getItem("adminToken");
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        };
        try {
          const result = await adminAddWorkoutAPI(reqBody, reqHeader);
          if (result.status === 200) {
            alert("Workout added successfully!");
            setWorkoutData({
              muscleName: "",
              workoutName: "",
              count: "",
              workoutImg: null,
              preview: "",
              tutorialLink: "",
            });
          } else {
            alert(result.response.data);
          }
        } catch (err) {
          console.error(err);
        }
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center py-5">
      <Container>
        <Card className="p-5 shadow-lg border-0 rounded-4 bg-black text-white">
          <h2 className="text-center text-danger mb-4 fw-bold">Add New Workout</h2>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-4 text-center">
              <Col>
                <Form.Label className="fw-bold">Select Muscle Group:</Form.Label>
                <div className="d-flex flex-wrap justify-content-center gap-2 mt-2">
                  {muscleGroups.map((muscle) => (
                    <Button
                      key={muscle}
                      variant={workoutData.muscleName === muscle ? "warning" : "outline-light"}
                      className="px-4 py-2 rounded-pill shadow-sm"
                      onClick={() => handleMuscleSelect(muscle)}
                    >
                      {muscle}
                    </Button>
                  ))}
                </div>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Workout Name:</Form.Label>
                  <Form.Control className="rounded-pill" type="text" name="workoutName" value={workoutData.workoutName} onChange={handleChange} required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Repetition Count:</Form.Label>
                  <Form.Control className="rounded-pill" type="number" name="count" value={workoutData.count} onChange={handleChange} required />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Upload Image:</Form.Label>
                  <Form.Control className="rounded-pill" type="file" onChange={handleFileChange} accept="image/jpeg, image/png, image/gif" required />
                </Form.Group>
              </Col>
              <Col md={6} className="d-flex justify-content-center align-items-center">
                {workoutData.preview && <Image src={workoutData.preview} alt="Workout" className="rounded-3 shadow-lg" width="200px" />}
              </Col>
            </Row>

            <Row className="mb-4">
              <Col>
                <Form.Group>
                  <Form.Label>Tutorial Video URL:</Form.Label>
                  <Form.Control className="rounded-pill" type="url" name="tutorialLink" value={workoutData.tutorialLink} onChange={handleChange} required />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col className="text-center">
                <Button variant="success" type="submit" className="w-50 py-2 fs-5 shadow-sm rounded-pill">
                  Add Workout
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default AdminAddWorkout;