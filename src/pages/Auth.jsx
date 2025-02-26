


import React, { useState } from 'react';
import authImg from "../assets/loginRegisterImg-2.jpeg";
import { FloatingLabel, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { registerAPI, loginAPI } from '../services/allAPI'; 

const Auth = ({ insideRegister }) => {

 

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (insideRegister) {
      // Registration Logic
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      const reqBody = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        password: formData.password,
      };

      try {
        const response = await registerAPI(reqBody);
        console.log("Registration response:", response.data);

        if (response.status === 200) {
          navigate('/otp', { state: { email: response.data.email } });  
        } else if (response.status === 409) {
          setError('User already exists');
        } else {
          setError(response.message || 'Registration failed');
        }
      } catch (err) {
        console.error('Registration error:', err);
        setError('An error occurred during registration');
      }
    } else {
      // Login Logic
      const reqBody = {
        email: formData.email,
        password: formData.password,
      };

      try {
        const response = await loginAPI(reqBody);
        console.log("Login response:", response.data);


        if (response.status === 200) {
         
          // Save token or user data in localStorage/sessionStorage
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));

          // Redirect to home page
          navigate('/');
          
        } else {
          setError( 'Invalid email or password' || response.message );
        }
      } catch (err) {
        console.error('Login error:', err);
        setError('Invalid email or password');
      }
    }
  };

  return (
    <div style={{ minHeight: '100vh', width: '100%' }} className='d-flex justify-content-center align-items-center'>
      <div className='container w-75'>
        <div className='card shadow p-2'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <img className='img-fluid' src={authImg} alt="" />
            </div>

            <div className='col-lg-6'>
              <h1 className='mt-2 text-white'> <i className="fa-solid fa-dumbbell"></i> Fitness World</h1>
              <h5 className='mt-2'>Sign {insideRegister ? 'up' : 'in'} to your Account</h5>

              <Form onSubmit={handleSubmit}>
                {insideRegister && (
                  <>
                    <FloatingLabel controlId="floatingInputName" label="First Name" className="mb-3">
                      <Form.Control 
                        type="text" 
                        placeholder="First Name" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange} 
                      />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInputName" label="Last Name" className="mb-3">
                      <Form.Control 
                        type="text" 
                        placeholder="Last Name" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange} 
                      />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInputName" label="Phone Number" className="mb-3">
                      <Form.Control 
                        type="text" 
                        placeholder="Phone Number" 
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange} 
                      />
                    </FloatingLabel>
                  </>
                )}

                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                  <Form.Control 
                    type="email" 
                    placeholder="name@example.com" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange} 
                  />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange} 
                  />
                </FloatingLabel>

                {insideRegister && (
                  <FloatingLabel controlId="floatingInputName" label="Confirm Password" className="mt-3">
                    <Form.Control 
                      type="password" 
                      placeholder="Confirm Password" 
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange} 
                    />
                  </FloatingLabel>
                )}

                {error && <p className="text-danger">{error}</p>}

                {insideRegister ? (
                  <div className='mt-3'>
                    <button type="submit" className='btn btn-primary mb-2'>Register</button>
                    <p>Already a User? Please Click here to <Link to={'/login'}>Login</Link></p>
                  </div>
                ) : (
                  <div className='mt-3'>
                    <button type="submit" className='btn btn-primary mb-2'>Login </button>
                    <p>New User? Please Click here to <Link to={'/register'}>Register</Link></p>
                  </div>
                )}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;