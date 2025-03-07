
import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import { resendOtpAPI, otpVerificationAPI } from "../services/allAPI"; // Import API functions

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [timer, setTimer] = useState(0); // Countdown timer state
  const navigate = useNavigate(); // For navigation after OTP verification

  const location = useLocation(); 
  const email = location.state?.email; // Extract email from state

  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setResendDisabled(false);
    }
    return () => clearInterval(countdown);
  }, [timer]);

  const handleChange = (e) => {
    setOtp(e.target.value);
    setError("");
  };

  // Handle OTP Verification
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (otp.length !== 6 || isNaN(otp)) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      const response = await otpVerificationAPI({ email, otp });

      if (response.status === 200) {
        setSuccess("OTP verified successfully!");
        setTimeout(() => navigate("/login"), 2000); // Redirect after success
      } else {
        setError(response.message || "Invalid OTP. Please try again.");
      }
    } catch (err) {
      console.error("OTP Verification Error:", err);
      setError("An error occurred while verifying OTP.");
    }
  };

  // Handle Resend OTP
  const handleResend = async () => {
    if (!email) {
      setError("Email not found. Please try registering again.");
      return;
    }

    try {
      setResendDisabled(true);
      setTimer(120); // 120 seconds countdown

      const response = await resendOtpAPI({ email });

      if (response.status === 200) {
        setSuccess("OTP has been resent successfully!");
      } else {
        setError(response.message || "Failed to resend OTP.");
      }
    } catch (err) {
      console.error("Resend OTP Error:", err);
      setError("An error occurred while resending OTP.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col md={12} className="text-center p-4 border rounded shadow ">
          <h3 className="text-danger">OTP Verification</h3>
          <p>Enter the 6-digit OTP sent to {email || "your email"}.</p>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                maxLength="6"
                value={otp}
                onChange={handleChange}
                placeholder="Enter OTP"
                className="text-center "
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mb-2">
              Verify OTP
            </Button>
          </Form>
          <Button variant="warning"  onClick={handleResend} disabled={resendDisabled}>
            {resendDisabled ? `Resend OTP in ${timer}s` : "Resend OTP"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default OTPVerification;
