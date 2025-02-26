import React, { useState } from "react";
import { Form, Button, Container, Image } from "react-bootstrap";
import { adminAddWorkoutAPI } from "../services/allAPI";

const muscleGroups = ["Chest", "Abs", "Legs", "Shoulders", "Arms", "Back"];

const AdminAddWorkout = () => {
  const [workoutData, setWorkoutData] = useState({
    muscleName: "",
    workoutName: "",
    count: "",
    workoutImg: null,
    preview: "",
    tutorialLink: "",
  });

  // Handle muscle button selection
  const handleMuscleSelect = (muscle) => {
    setWorkoutData({ ...workoutData, muscleName: muscle });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkoutData({ ...workoutData, [name]: value });
  };



  // Handle Image Upload
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

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const { muscleName, workoutName, count, tutorialLink, workoutImg } = workoutData;

    if (muscleName && workoutName && count && tutorialLink && workoutImg) {
      
      console.log("ok");
      
      const reqBody = new FormData();
      reqBody.append("muscleName", muscleName);
      reqBody.append("workoutName", workoutName);
      reqBody.append("count", count);
      reqBody.append("tutorialLink", tutorialLink);
      reqBody.append("workoutImg", workoutImg);

      const token = localStorage.getItem("adminToken");
      if (token) {
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization": `Bearer ${token}`,
        };

        try {
       const result = await adminAddWorkoutAPI(reqBody, reqHeader);
       console.log(result);
       
       
       
      

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
    <Container className="mt-4">
      <h2 className="text-center mb-5 text-white">Add New Workout</h2>
      <Form onSubmit={handleSubmit}>
        {/* Muscle Selection */}
        <Form.Group className="mb-5 d-flex align-items-center">
          <Form.Label className="text-white me-5 mb-0">Select Muscle:</Form.Label>
          <div className="ms-4 d-flex flex-wrap gap-2">
            {muscleGroups.map((muscle) => (
              <Button
                key={muscle}
                variant={workoutData.muscleName === muscle ? "warning" : "outline-secondary"}
                onClick={() => handleMuscleSelect(muscle)}
              >
                {muscle}
              </Button>
            ))}
          </div>
        </Form.Group>

        {/* Workout Name */}
        <Form.Group className="mb-5 d-flex align-items-center">
          <Form.Label className="text-white me-3 mb-0" style={{ minWidth: "150px" }}>
            Name of Workout:
          </Form.Label>
          <Form.Control
            type="text"
            name="workoutName"
            placeholder="Enter workout name"
            value={workoutData.workoutName}
            onChange={handleChange}
            required
            className="w-50"
          />
        </Form.Group>

        {/* Count of Exercise */}
        <Form.Group className="mb-5 d-flex align-items-center">
          <Form.Label className="text-white me-3 mb-0" style={{ minWidth: "150px" }}>
            Count of Exercise:
          </Form.Label>
          <Form.Control
            type="number"
            name="count"
            placeholder="Enter count"
            value={workoutData.count}
            onChange={handleChange}
            required
            className="w-50"
          />
        </Form.Group>

        {/* Image Upload */}
        <Form.Group className="mb-5 d-flex align-items-center">
          <Form.Label className="text-white me-3 mb-0" style={{ minWidth: "150px" }}>
            Workout Image:
          </Form.Label>
          <Form.Control
            className="w-50"
            type="file"
            onChange={handleFileChange}
            accept="image/jpeg, image/png, image/gif"
            required
          />
        </Form.Group>

        {/* Image Preview */}
        {workoutData.preview && (
          <div className="mt-3 mb-5">
            <Image src={workoutData.preview} alt="Workout" thumbnail width="200px" />
          </div>
        )}

        {/* Tutorial URL */}
        <Form.Group className="mb-5 d-flex align-items-center">
          <Form.Label className="text-white me-3 mb-0" style={{ minWidth: "150px" }}>
            Demo Tutorial URL:
          </Form.Label>
          <Form.Control
            type="url"
            name="tutorialLink"
            placeholder="Enter YouTube tutorial URL"
            value={workoutData.tutorialLink}
            onChange={handleChange}
            required
            className="w-50"
          />
        </Form.Group>

        {/* Submit Button */}
        <div className="text-center">
          <Button variant="success" type="submit" className="w-25">
            Add Workout
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AdminAddWorkout;
