

// import React, { useContext, useState } from 'react';
// import authImg from "../assets/loginRegisterImg-2.jpeg";
// import { FloatingLabel, Form, Row } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import { registerAPI, loginAPI } from '../services/allAPI'; 
// import { tokenAuthContext } from '../contexts/AuthContextAPI';

// const Auth = ({ insideRegister }) => {

//   const { isAuthorised, setIsAuthorised } = useContext(tokenAuthContext)

 

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phoneNumber: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [error, setError] = useState(null);
//   const navigate = useNavigate();  

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (insideRegister) {
//       // Registration Logic
//       if (formData.password !== formData.confirmPassword) {
//         setError('Passwords do not match');
//         return;
//       }

//       const reqBody = {
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         phoneNumber: formData.phoneNumber,
//         email: formData.email,
//         password: formData.password,
//       };

//       try {
//         const response = await registerAPI(reqBody);
//         console.log("Registration response:", response.data);

//         if (response.status === 200) {
//           navigate('/otp', { state: { email: response.data.email } });  
//         } else if (response.status === 409) {
//           setError('User already exists');
//         } else {
//           setError(response.message || 'Registration failed');
//         }
//       } catch (err) {
//         console.error('Registration error:', err);
//         setError('An error occurred during registration');
//       }
//     } else {
//       // Login Logic
//       const reqBody = {
//         email: formData.email,
//         password: formData.password,
//       };

//       try {
//         const response = await loginAPI(reqBody);
//         console.log("Login response:", response.data);


//         if (response.status === 200) {
         
//           // Save token or user data in localStorage/sessionStorage
//           localStorage.setItem("token", response.data.token);
//           localStorage.setItem("user", JSON.stringify(response.data.user));

//           setIsAuthorised(true) 

//           // Redirect to home page
//           navigate('/');
          
//         } else {
//           setError( 'Invalid email or password' || response.message );
//         }
//       } catch (err) {
//         console.error('Login error:', err);
//         setError('Invalid email or password');
//       }
//     }
//   };

//   return (
//     <div style={{ minHeight: '100vh', width: '100%' }} className='d-flex justify-content-center align-items-center bg-black'>
//       <div className='container d-flex justify-content-center '>
//         <div className='card shadow p-4 w-50 text-center bg-dark '>
//           <div className='row align-items-center'>
           

           
//               <h1 className='mt-2 text-danger'> <i className="fa-solid fa-dumbbell"></i> Fitness World</h1>
//               <h5 className='mt-2'>Sign {insideRegister ? 'up' : 'in'} to your Account</h5>

//               <Form onSubmit={handleSubmit} >
//                 {insideRegister && (
//                   <>
//                    <Row>
//                    <FloatingLabel controlId="floatingInputName" label="First Name" className="mb-3 w-50">
//                       <Form.Control 
//                         type="text" 
//                         placeholder="First Name" 
//                         name="firstName"
//                         value={formData.firstName}
//                         onChange={handleInputChange} 
                        
//                       />
//                     </FloatingLabel>

//                     <FloatingLabel controlId="floatingInputName" label="Last Name" className="mb-3 w-50">
//                       <Form.Control 
//                         type="text" 
//                         placeholder="Last Name" 
//                         name="lastName"
//                         value={formData.lastName}
//                         onChange={handleInputChange} 
//                       />
//                     </FloatingLabel>
//                    </Row>

//                     <FloatingLabel controlId="floatingInputName" label="Phone Number" className="mb-3">
//                       <Form.Control 
//                         type="text" 
//                         placeholder="Phone Number" 
//                         name="phoneNumber"
//                         value={formData.phoneNumber}
//                         onChange={handleInputChange} 
//                       />
//                     </FloatingLabel>
//                   </>
//                 )}

//                 <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
//                   <Form.Control 
//                     type="email" 
//                     placeholder="name@example.com" 
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange} 
//                   />
//                 </FloatingLabel>

//                 <FloatingLabel controlId="floatingPassword" label="Password">
//                   <Form.Control 
//                     type="password" 
//                     placeholder="Password" 
//                     name="password"
//                     value={formData.password}
//                     onChange={handleInputChange} 
//                   />
//                 </FloatingLabel>

//                 {insideRegister && (
//                   <FloatingLabel controlId="floatingInputName" label="Confirm Password" className="mt-3">
//                     <Form.Control 
//                       type="password" 
//                       placeholder="Confirm Password" 
//                       name="confirmPassword"
//                       value={formData.confirmPassword}
//                       onChange={handleInputChange} 
//                     />
//                   </FloatingLabel>
//                 )}

//                 {error && <p className="text-danger">{error}</p>}

//                 {insideRegister ? (
//                   <div className='mt-3'>
//                     <button type="submit" className='btn btn-primary mb-2'>Register</button>
//                     <p className='text-white'>Already a User? Please Click here to <Link className='text-warning text-decoration-none' to={'/login'}>Login</Link></p>
//                   </div>
//                 ) : (
//                   <div className='mt-3'>
//                     <button type="submit" className='btn btn-primary mb-2'>Login </button>
//                     <p className='text-white'>New User? Please Click here to <Link className='text-warning text-decoration-none' to={'/register'}>Register</Link></p>
//                   </div>
//                 )}
//               </Form>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;


// import React, { useContext, useState } from 'react';
// import { FloatingLabel, Form, Row, Col, Button, Card, Container } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import { registerAPI, loginAPI } from '../services/allAPI'; 
// import { tokenAuthContext } from '../contexts/AuthContextAPI';

// const Auth = ({ insideRegister }) => {
//   const { setIsAuthorised } = useContext(tokenAuthContext);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phoneNumber: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [error, setError] = useState(null);
//   const navigate = useNavigate();  

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (insideRegister) {
//       if (formData.password !== formData.confirmPassword) {
//         setError('Passwords do not match');
//         return;
//       }

//       const reqBody = {
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         phoneNumber: formData.phoneNumber,
//         email: formData.email,
//         password: formData.password,
//       };

//       try {
//         const response = await registerAPI(reqBody);
//         if (response.status === 200) {
//           navigate('/otp', { state: { email: response.data.email } });
//         } else if (response.status === 409) {
//           setError('User already exists');
//         } else {
//           setError(response.message || 'Registration failed');
//         }
//       } catch (err) {
//         setError('An error occurred during registration');
//       }
//     } else {
//       const reqBody = { email: formData.email, password: formData.password };
//       try {
//         const response = await loginAPI(reqBody);
//         if (response.status === 200) {
//           localStorage.setItem("token", response.data.token);
//           localStorage.setItem("user", JSON.stringify(response.data.user));
//           setIsAuthorised(true);
//           navigate('/');
//         } else {
//           setError('Invalid email or password');
//         }
//       } catch (err) {
//         setError('Invalid email or password');
//       }
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center" 
//          style={{ minHeight: '100vh', background: 'linear-gradient(to right, #000428, #004e92)' }}>
//       <Container className="d-flex justify-content-center">
//         <Card className="p-4 text-center bg-dark text-white shadow-lg" style={{ width: '450px', borderRadius: '15px' }}>
//           <h1 className="mt-2 text-danger"><i className="fa-solid fa-dumbbell"></i> Fitness World</h1>
//           <h5 className="mt-2 text-light">Sign {insideRegister ? 'Up' : 'In'} to Your Account</h5>

//           <Form onSubmit={handleSubmit} className="mt-3">
//             {insideRegister && (
//               <Row>
//                 <Col>
//                   <FloatingLabel controlId="floatingFirstName" label="First Name" className="mb-3">
//                     <Form.Control 
//                       type="text" 
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleInputChange} 
//                       required 
//                     />
//                   </FloatingLabel>
//                 </Col>
//                 <Col>
//                   <FloatingLabel controlId="floatingLastName" label="Last Name" className="mb-3">
//                     <Form.Control 
//                       type="text" 
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleInputChange} 
//                       required 
//                     />
//                   </FloatingLabel>
//                 </Col>
//               </Row>
//             )}

//             {insideRegister && (
//               <FloatingLabel controlId="floatingPhone" label="Phone Number" className="mb-3">
//                 <Form.Control 
//                   type="text" 
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleInputChange} 
//                   required 
//                 />
//               </FloatingLabel>
//             )}

//             <FloatingLabel controlId="floatingEmail" label="Email address" className="mb-3">
//               <Form.Control 
//                 type="email" 
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange} 
//                 required 
//               />
//             </FloatingLabel>

//             <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
//               <Form.Control 
//                 type="password" 
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange} 
//                 required 
//               />
//             </FloatingLabel>

//             {insideRegister && (
//               <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password" className="mb-3">
//                 <Form.Control 
//                   type="password" 
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange} 
//                   required 
//                 />
//               </FloatingLabel>
//             )}

//             {error && <p className="text-danger">{error}</p>}

//             <Button type="submit" className="w-100 mt-2" variant="primary">
//               {insideRegister ? "Register" : "Login"}
//             </Button>

//             <p className="mt-3 text-light">
//               {insideRegister ? "Already a User?" : "New User?"}  
//               <Link className="text-warning text-decoration-none ms-1" 
//                     to={insideRegister ? '/login' : '/register'}>
//                 {insideRegister ? "Login" : "Register"}
//               </Link>
//             </p>
//           </Form>
//         </Card>
//       </Container>
//     </div>
//   );
// };

// export default Auth;



import React, { useContext, useState } from 'react';
import { FloatingLabel, Form, Row, Col, Button, Card, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { registerAPI, loginAPI } from '../services/allAPI'; 
import { tokenAuthContext } from '../contexts/AuthContextAPI';
import { GoogleLogin } from '@react-oauth/google';
import { toast,ToastContainer } from 'react-toastify';

const Auth = ({ insideRegister }) => {
  const { setIsAuthorised } = useContext(tokenAuthContext);
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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (insideRegister) {
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
        if (response.status === 200) {
          navigate('/otp', { state: { email: response.data.email } });
        } else if (response.status === 409) {
          setError('User already exists');
        } else {
          setError(response.message || 'Registration failed');
        }
      } catch (err) {
        setError('An error occurred during registration');
      }
    } else {
      const reqBody = { email: formData.email, password: formData.password };
      try {
        const response = await loginAPI(reqBody);
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          setIsAuthorised(true);
          navigate('/');
        } else {
          setError('Invalid email or password');
        }
      } catch (err) {
        setError('Invalid email or password');
      }
    }
  };

    const handleGoogleLogin = async (credentialResponse) => {
    if (credentialResponse?.credential) {
      try {
        const credential = jwtDecode(credentialResponse.credential);
        const { email, email_verified, given_name, family_name, sub } = credential;

        const response = await axios.post('/google-login', {
          email, email_verified, firstName: given_name, lastName: family_name, id: sub
        });

        const { token, user } = response.data;
        dispatch(addToken(token));
        dispatch(addUser(user));

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        toast.success('Google Login successful!');
        navigate('/');
      } catch (error) {
        toast.error(error.response?.data?.message || 'Google Login failed.');
      }
    }
  };


  return (
    <div className="d-flex justify-content-center align-items-center" 
         style={{ minHeight: '100vh', background: 'linear-gradient(to right, #000000, #8B0000)' }}>
      <Container className="d-flex justify-content-center">
        <Card className="p-4 text-center text-white shadow-lg" style={{ width: '450px', borderRadius: '15px', background: '#000' }}>
          <h1 className="mt-2 text-danger"><i className="fa-solid fa-dumbbell"></i> Fitness World</h1>
          <h5 className="mt-2 text-light">Sign {insideRegister ? 'Up' : 'In'} to Your Account</h5>

          <Form onSubmit={handleSubmit} className="mt-3">
            {insideRegister && (
              <Row>
                <Col>
                  <FloatingLabel controlId="floatingFirstName" label="First Name" className="mb-3">
                    <Form.Control 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange} 
                      required 
                      style={{ background: 'white', color: '#000' }}
                    />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel controlId="floatingLastName" label="Last Name" className="mb-3">
                    <Form.Control 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange} 
                      required 
                      style={{ background: 'white', color: '#000' }}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
            )}

            {insideRegister && (
              <FloatingLabel controlId="floatingPhone" label="Phone Number" className="mb-3">
                <Form.Control 
                  type="text" 
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange} 
                  required 
                  style={{ background: 'white', color: '#000' }}
                />
              </FloatingLabel>
            )}

            <FloatingLabel controlId="floatingEmail" label="Email address" className="mb-3">
              <Form.Control 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange} 
                required 
                style={{ background: 'white', color: '#000' }}
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
              <Form.Control 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleInputChange} 
                required 
                style={{ background: 'white', color: '#000' }}
              />
            </FloatingLabel>

            {insideRegister && (
              <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password" className="mb-3">
                <Form.Control 
                  type="password" 
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange} 
                  required 
                  style={{ background: 'white', color: '#000' }}
                />
              </FloatingLabel>
            )}

            {error && <p className="text-danger">{error}</p>}

            <Button type="submit" className="w-100 mt-2" style={{ background: '#DC143C', border: 'none' }}>
              {insideRegister ? "Register" : "Login"}
            </Button>

            <p className="mt-3">
              {insideRegister ? "Already a User?" : "New User?"}  
              <Link className="text-decoration-none ms-1" 
                    to={insideRegister ? '/login' : '/register'}
                    style={{ color: '#DC143C', fontWeight: 'bold' }}>
                {insideRegister ? "Login" : "Register"}
              </Link>
            </p>
              
          </Form>

          <ToastContainer/>
          
          <GoogleLogin onSuccess={handleGoogleLogin} onError={() => toast.error('Google Login failed.')} />

        </Card>
      </Container>
    </div>
  );
};

export default Auth;
