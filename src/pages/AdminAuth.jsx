// import React from 'react'
// import authImg from "../assets/loginRegisterImg-2.jpeg"
// import { FloatingLabel, Form } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

// const AdminAuth = () => {
//           return (
//                    <>
                             
//                               <div style={{ minHeight: '100vh', width: '100%' }} className='d-flex justify-content-center align-items-center'>
                          
                          
                        
//                                 <div className='container w-75'>
                                        
                          
//                                   <div className='card shadow p-2'>
                          
//                                     <div className='row align-items-center'>
//                                     <h1 className=' text-center text-success mb-3'>Admin panel</h1>
//                                       <div className='col-lg-6'>
//                                         <img className='img-fluid' src={authImg} alt="" />
                          
//                                       </div>
                          
//                                       <div className='col-lg-6'>
//                                         <h1 className='my-3 text-white'> <i class="fa-solid fa-dumbbell"></i> Fitness World</h1>
                                        
                          
//                                         <Form>
                                         
                          
//                                           <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
//                                             <Form.Control  type="email" placeholder="name@example.com" />
//                                           </FloatingLabel>
                          
//                                           <FloatingLabel controlId="floatingPassword" label="Password">
//                                             <Form.Control  type="password" placeholder="Password" />
//                                           </FloatingLabel>
                          
                                         
//                                               <div className='mt-3'>
//                                                 <button  className='btn btn-primary mb-2 d-flex'>Login  
//                                                 </button>
                                                
//                                               </div>
                          
                                          
                          
//                                         </Form>
                          
//                                       </div>
                          
//                                     </div>
//                                   </div>
//                                 </div>
                          
                          
                          
//                               </div>
//                    </>
//                   )
// }

// export default AdminAuth


import React, { useState } from 'react';
import authImg from "../assets/loginRegisterImg-2.jpeg";
import { FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { adminLoginAPI } from '../services/allAPI'; // Import API function

const AdminAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook to redirect after login

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await adminLoginAPI({ email, password });
      if (response.status === 200) {
        localStorage.setItem("adminToken", response.data.token); // Store token
        navigate("/adminHome"); // Redirect to admin panel
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div style={{ minHeight: '100vh', width: '100%' }} className='d-flex justify-content-center align-items-center'>
      <div className='container w-75'>
        <div className='card shadow p-2'>
          <div className='row align-items-center'>
            <h1 className='text-center text-success mb-3'>Admin Panel</h1>
            <div className='col-lg-6'>
              <img className='img-fluid' src={authImg} alt="" />
            </div>
            <div className='col-lg-6'>
              <h1 className='my-3 text-white'><i className="fa-solid fa-dumbbell"></i> Fitness World</h1>

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

                <div className='mt-3'>
                  <button type="submit" className='btn btn-primary mb-2 d-flex'>
                    Login  
                  </button>
                </div>
              </Form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAuth;
