import React, { useState } from "react";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import Header from "../components/Header";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const [statusColor, setStatusColor] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      determineStatus(bmiValue);
    }
  };

  const determineStatus = (bmiValue) => {
    if (bmiValue < 18.5) {
      setStatus("Underweight");
      setStatusColor("warning");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setStatus("Normal weight");
      setStatusColor("success");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setStatus("Overweight");
      setStatusColor("primary");
    } else {
      setStatus("Obese");
      setStatusColor("danger");
    }
  };

  return (
          <>
            <Header  />
            
              <Container className="pt-5 d-flex justify-content-center pb-5">
                <Card className="p-4 shadow-lg my-5" style={{ maxWidth: "400px", width: "100%", borderRadius: "15px" }}>
                  <h2 className="text-center mb-4 text-primary" style={{ fontWeight: "bold" }}>BMI Calculator</h2>
                  <Form onSubmit={calculateBMI}>
                    {/* Gender Selection */}
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold text-white">Gender</Form.Label>
                      <Row>
                        <Col>
                          <Form.Check
                            type="radio"
                            label="Male"
                            name="gender"
                            value="male"
                            checked={gender === "male"}
                            onChange={(e) => setGender(e.target.value)}
                          />
                        </Col>
                        <Col>
                          <Form.Check
                            type="radio"
                            label="Female"
                            name="gender"
                            value="female"
                            checked={gender === "female"}
                            onChange={(e) => setGender(e.target.value)}
                          />
                        </Col>
                      </Row>
                    </Form.Group>
          
                    {/* Weight Input */}
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
          
                    {/* Height Input */}
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
          
                    {/* Calculate Button */}
                    <Button variant="success" type="submit" className="w-100 text-white">
                      Calculate BMI
                    </Button>
                  </Form>
          
                  {/* BMI Result */}
                  {bmi && (
                    <Card className={`mt-4 text-center text-white bg-${statusColor} p-3 rounded`}>
                      <h4 className="mb-1">Your BMI: {bmi}</h4>
                      <p className="mb-0 fw-bold">{status}</p>
                    </Card>
                  )}
                </Card>
              </Container>
          </>
  );
};

export default BMICalculator;
