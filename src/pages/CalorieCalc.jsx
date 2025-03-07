// import React, { useState } from "react";
// import { Container, Form, Button, Row, Col, Card, ListGroup, Alert, Modal } from "react-bootstrap";
// import Header from "../components/Header";

// const CalorieCalculator = () => {
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("male");
//   const [activity, setActivity] = useState(1.2);
//   const [calories, setCalories] = useState(null);
//   const [recommendations, setRecommendations] = useState(null);
//   const [error, setError] = useState("");
//   const [showRecommendations, setShowRecommendations] = useState(false);

//   const calculateCalories = (e) => {
//     e.preventDefault();
//     setError(""); // Reset error state

//     if (!weight || !height || !age) {
//       setError("Please fill in all fields!");
//       return;
//     }

//     let bmr;
//     if (gender === "male") {
//       bmr = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
//     } else {
//       bmr = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
//     }

//     const totalCalories = Math.round(bmr * activity);
//     setCalories(totalCalories);

//     let foodRecommendations;
//     if (activity < 1.55) {
//       foodRecommendations = {
//         eat: ["Oats", "Eggs", "Lean meats", "Vegetables", "Nuts", "Greek yogurt", "Fruits"],
//         avoid: ["Fast food", "Sugary drinks", "Refined carbs", "Processed snacks", "Deep-fried foods"],
//       };
//     } else {
//       foodRecommendations = {
//         eat: ["Brown rice", "Quinoa", "Lean chicken", "Salmon", "Almonds", "Sweet potatoes", "Protein shakes"],
//         avoid: ["Sugary cereals", "White bread", "Soda", "Alcohol", "Artificially sweetened drinks"],
//       };
//     }

//     setRecommendations(foodRecommendations);
//     setShowRecommendations(true); // Show the recommendations modal
//   };

//   const handleCloseModal = () => setShowRecommendations(false); // Close the modal

//   return (
//         <>
//                     <Header  />
//               <Container className="pt-5 ">
//                 <Row className="justify-content-center mt-5">
//                   <Col md={6} sm={12}>
//                     <Card className="shadow-lg border-0 rounded-3">
//                       <Card.Body className="p-4">
//                         <h2 className="text-center text-primary mb-4 fw-bold">Calorie Calculator</h2>
          
//                         {error && <Alert variant="danger">{error}</Alert>}
          
//                         <Form onSubmit={calculateCalories}>
//                           <Form.Group className="mb-3">
//                             <Form.Label className="fw-semibold text-white">Weight (kg)</Form.Label>
//                             <Form.Control
//                               type="number"
//                               placeholder="Enter weight"
//                               value={weight}
//                               onChange={(e) => setWeight(e.target.value)}
//                               required
//                             />
//                           </Form.Group>
          
//                           <Form.Group className="mb-3">
//                             <Form.Label className="fw-semibold text-white">Height (cm)</Form.Label>
//                             <Form.Control
//                               type="number"
//                               placeholder="Enter height"
//                               value={height}
//                               onChange={(e) => setHeight(e.target.value)}
//                               required
//                             />
//                           </Form.Group>
          
//                           <Form.Group className="mb-3">
//                             <Form.Label className="fw-semibold text-white">Age</Form.Label>
//                             <Form.Control
//                               type="number"
//                               placeholder="Enter age"
//                               value={age}
//                               onChange={(e) => setAge(e.target.value)}
//                               required
//                             />
//                           </Form.Group>
          
//                           <Form.Group className="mb-3">
//                             <Form.Label className="fw-semibold text-white">Gender</Form.Label>
//                             <Form.Select value={gender} onChange={(e) => setGender(e.target.value)} required>
//                               <option value="male">Male</option>
//                               <option value="female">Female</option>
//                             </Form.Select>
//                           </Form.Group>
          
//                           <Form.Group className="mb-3">
//                             <Form.Label className="fw-semibold text-white">Activity Level</Form.Label>
//                             <Form.Select value={activity} onChange={(e) => setActivity(Number(e.target.value))} required>
//                               <option value="1.2">Sedentary (little or no exercise)</option>
//                               <option value="1.375">Lightly active (light exercise/sports 1-3 days/week)</option>
//                               <option value="1.55">Moderately active (moderate exercise 3-5 days/week)</option>
//                               <option value="1.725">Very active (hard exercise 6-7 days a week)</option>
//                               <option value="1.9">Super active (very intense exercise daily)</option>
//                             </Form.Select>
//                           </Form.Group>
          
//                           <Button variant="success" type="submit" className="w-100 py-2 my-2">
//                             Calculate
//                           </Button>
//                         </Form>
          
//                         {calories && (
//                           <Card className="mt-4 text-center bg-success text-white p-3 rounded-3">
//                             <h4>Estimated Daily Calories</h4>
//                             <h2>{calories} kcal</h2>
//                           </Card>
//                         )}
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 </Row>
          
//                 {/* Modal for Food Recommendations */}
//                 <Modal show={showRecommendations} onHide={handleCloseModal} centered>
//                   <Modal.Header closeButton>
//                     <Modal.Title>Food Recommendations</Modal.Title>
//                   </Modal.Header>
//                   <Modal.Body>
//                     <Row>
//                       <Col md={6}>
//                         <h5 className="text-success fw-bold">✅ Foods to Eat</h5>
//                         <ListGroup>
//                           {recommendations?.eat.map((food, index) => (
//                             <ListGroup.Item key={index}>{food}</ListGroup.Item>
//                           ))}
//                         </ListGroup>
//                       </Col>
//                       <Col md={6}>
//                         <h5 className="text-danger fw-bold">❌ Foods to Avoid</h5>
//                         <ListGroup>
//                           {recommendations?.avoid.map((food, index) => (
//                             <ListGroup.Item key={index}>{food}</ListGroup.Item>
//                           ))}
//                         </ListGroup>
//                       </Col>
//                     </Row>
//                   </Modal.Body>
//                   <Modal.Footer>
//                     <Button variant="secondary" onClick={handleCloseModal}>
//                       Close
//                     </Button>
//                   </Modal.Footer>
//                 </Modal>
//               </Container>
//         </>
//   );
// };

// export default CalorieCalculator;


import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card, ListGroup, Alert, Modal } from "react-bootstrap";
import Header from "../components/Header";

const CalorieCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState(1.2);
  const [calories, setCalories] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [error, setError] = useState("");
  const [showCaloriesModal, setShowCaloriesModal] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const calculateCalories = (e) => {
    e.preventDefault();
    setError("");

    if (!weight || !height || !age) {
      setError("Please fill in all fields!");
      return;
    }

    let bmr;
    if (gender === "male") {
      bmr = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
    } else {
      bmr = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
    }

    const totalCalories = Math.round(bmr * activity);
    setCalories(totalCalories);

    let foodRecommendations;
    if (activity < 1.55) {
      foodRecommendations = {
        eat: ["Oats", "Eggs", "Lean meats", "Vegetables", "Nuts", "Greek yogurt", "Fruits"],
        avoid: ["Fast food", "Sugary drinks", "Refined carbs", "Processed snacks", "Deep-fried foods"],
      };
    } else {
      foodRecommendations = {
        eat: ["Brown rice", "Quinoa", "Lean chicken", "Salmon", "Almonds", "Sweet potatoes", "Protein shakes"],
        avoid: ["Sugary cereals", "White bread", "Soda", "Alcohol", "Artificially sweetened drinks"],
      };
    }

    setRecommendations(foodRecommendations);
    setShowCaloriesModal(true); // Open Calories modal first
  };

  const handleCloseCaloriesModal = () => {
    setShowCaloriesModal(false);
    setShowRecommendations(true); // Open food recommendations modal
  };

  const handleCloseRecommendationsModal = () => setShowRecommendations(false);

  return (
    <>
      <Header />
     <div className="bg-black" style={{minHeight:"75vh"}}>
        <Container className="pt-5 ">
          <Row className="justify-content-center mt-5">
            <Col md={6} sm={12}>
              <Card className="shadow-lg border-0 rounded-3">
                <Card.Body className="p-4">
                  <h2 className="text-center text-warning mb-4 fw-bold">Calorie Calculator</h2>
  
                  {error && <Alert variant="danger">{error}</Alert>}
  
                  <Form onSubmit={calculateCalories}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold text-white">Weight (kg)</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                      />
                    </Form.Group>
  
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold text-white">Height (cm)</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        required
                      />
                    </Form.Group>
  
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold text-white">Age</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                      />
                    </Form.Group>
  
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold text-white">Gender</Form.Label>
                      <Form.Select value={gender} onChange={(e) => setGender(e.target.value)} required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </Form.Select>
                    </Form.Group>
  
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold text-white">Activity Level</Form.Label>
                      <Form.Select value={activity} onChange={(e) => setActivity(Number(e.target.value))} required>
                        <option value="1.2">Sedentary (little or no exercise)</option>
                        <option value="1.375">Lightly active (light exercise/sports 1-3 days/week)</option>
                        <option value="1.55">Moderately active (moderate exercise 3-5 days/week)</option>
                        <option value="1.725">Very active (hard exercise 6-7 days a week)</option>
                        <option value="1.9">Super active (very intense exercise daily)</option>
                      </Form.Select>
                    </Form.Group>
  
                    <Button variant="info" type="submit" className="w-100 py-2 my-2">
                      Calculate
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
  
          {/* Modal for Estimated Daily Calories */}
          <Modal show={showCaloriesModal} onHide={() => setShowCaloriesModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Estimated Daily Calories</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center bg-success ">
              <h2 className="text-white fw-bold">{calories} kcal</h2>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleCloseCaloriesModal}>
                Next
              </Button>
            </Modal.Footer>
          </Modal>
  
          {/* Modal for Food Recommendations */}
          <Modal show={showRecommendations} onHide={handleCloseRecommendationsModal} centered>
            <Modal.Header closeButton>
              <Modal.Title className="text-warning">Food Recommendations</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <h5 className="text-success fw-bold">✅ Foods to Eat</h5>
                  <ListGroup>
                    {recommendations?.eat.map((food, index) => (
                      <ListGroup.Item key={index}>{food}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
                <Col md={6}>
                  <h5 className="text-danger fw-bold">❌ Foods to Avoid</h5>
                  <ListGroup>
                    {recommendations?.avoid.map((food, index) => (
                      <ListGroup.Item key={index}>{food}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleCloseRecommendationsModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
     </div>
    </>
  );
};

export default CalorieCalculator;
