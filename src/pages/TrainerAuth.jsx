

import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { trainerLoginAPI } from '../services/allAPI';

const TrainerAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await trainerLoginAPI({ email, password });
      if (response.status === 200) {
        localStorage.setItem("trainerToken", response.data.token);
       
        navigate("/trainerHome");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div style={{ minHeight: '100vh', width: '100%',background: 'linear-gradient(to bottom, white,rgb(151, 58, 58))'
    }} className='d-flex justify-content-center align-items-center ' >
      <div className='container d-flex justify-content-center'>
        <div className='card shadow p-4 w-50 text-center bg-black rounded'>
          <div className='row align-items-center'>
            <h1 className='my-3 text-danger'><i className="fa-solid fa-dumbbell"></i> Fitness World</h1>
            <h5 className='text-center text-white mb-3'>Trainer Panel</h5>

            {error && <p className="text-danger">{error}</p>} {/* Show error messages */}

            <Form onSubmit={handleLogin}>
              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control 
                  type="email" 
                  placeholder="name@example.com" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FloatingLabel>

              <div className='mt-3 d-flex justify-content-center'>
                <button type="submit" className='btn btn-danger mb-2 d-flex '>
                  Login  
                </button>
                {/* <button type="submit" className='btn btn-danger mb-2 w-25 d-flex justify-content-center align-items-center'>
  Login  
</button> */}

              </div>

              
            </Form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerAuth;
