// import React, { useContext } from 'react'
// import { Container, Navbar } from 'react-bootstrap'
// import { Link, useNavigate } from 'react-router-dom'
// import { tokenAuthContext } from '../contexts/AuthContextAPI'



// const Header = () => {

//   const navigate =useNavigate()

//   const { isAuthorised, setIsAuthorised } = useContext(tokenAuthContext)


//   const logout =()=>{
//     localStorage.clear()
//     setIsAuthorised(false)
//     alert("logging out!...")
//     navigate('/')
//   }

//   return (
//     <Navbar className="border  position-fixed w-100 z-3 bg-danger">
//       <Container >

//       <Link to={'/'} style={{ textDecoration: 'none' }}>
//           <Navbar.Brand  className='fw-bolder text-black '>
//           <i class="fa-solid fa-dumbbell me-2"></i>
//             Fitness World
//           </Navbar.Brand>
//         </Link>

//         <Link to={'/'} className='text-white text-decoration-none'>Home</Link>
//         <Link to={'/workout'} className='text-white text-decoration-none'>Workouts</Link>
//         <Link to={'/bmiCalc'} className='text-white text-decoration-none'>BMI Calculator</Link>
//         <Link to={'/calorieCalc'} className='text-white text-decoration-none'>Calorie Calculator</Link>


       
          
//             <button onClick={logout} className='btn   text-decoration-none ' >Logout <i className="fa-solid fa-right-from-bracket"></i></button>
       
        
//       </Container>
//     </Navbar>
//   )
// }

// export default Header

import React, { useContext } from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../contexts/AuthContextAPI'

const Header = () => {
  const navigate = useNavigate()
  const { isAuthorised, setIsAuthorised } = useContext(tokenAuthContext)

  const logout = () => {
    localStorage.clear()
    setIsAuthorised(false)
    alert("Logging out!...") 
    navigate('/')
  }

  return (
    <Navbar expand="lg" className="border position-fixed w-100 z-3 bg-danger">
      <Container>
        {/* Brand */}
        <Navbar.Brand as={Link} to="/" className="fw-bolder text-black">
          <i className="fa-solid fa-dumbbell me-2"></i> Fitness World
        </Navbar.Brand>

        {/* Toggler Button */}
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />

        {/* Navbar Items */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="m-auto">
            {/* <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link> */}
            <Nav.Link as={Link} to="/workout" className="text-white me-3">Workouts</Nav.Link>
            <Nav.Link as={Link} to="/chat" className="text-white me-3">FitBuddy</Nav.Link>
            <Nav.Link as={Link} to="/bmiCalc" className="text-white me-3">BMI Calculator</Nav.Link>
            <Nav.Link as={Link} to="/calorieCalc" className="text-white">Calorie Calculator</Nav.Link>
          </Nav>

          {/* Logout Button */}
          <Button variant="dark" className="ms-lg-3 mt-2 mt-lg-0" onClick={logout}>
            Logout <i className="fa-solid fa-right-from-bracket"></i>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
