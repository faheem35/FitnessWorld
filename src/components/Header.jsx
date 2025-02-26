import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
// import { tokenAuthContext } from '../contexts/AuthContextAPI'



const Header = () => {

  const navigate =useNavigate()

  // const { isAuthorised, setIsAuthorised } = useContext(tokenAuthContext)


  const logout =()=>{
    localStorage.clear()
    // setIsAuthorised(false)
    alert("logging out!...")
    navigate('/')
  }

  return (
    <Navbar className="border rounded position-fixed w-100 z-3 bg-light">
      <Container >

      <Link to={'/'} style={{ textDecoration: 'none' }}>
          <Navbar.Brand  className='fw-bolder  '>
          <i class="fa-solid fa-dumbbell me-2"></i>
            Fitness World
          </Navbar.Brand>
        </Link>

        <Link to={'/'} className='text-black text-decoration-none'>Home</Link>
        <Link to={'/workout'} className='text-black text-decoration-none'>Workouts</Link>
        <Link to={'/bmiCalc'} className='text-black text-decoration-none'>BMI Calculator</Link>
        <Link to={'/calorieCalc'} className='text-black text-decoration-none'>Calorie Calculator</Link>


       
          
            <button onClick={logout} className='btn btn-link text-black text-decoration-none fs-5'>Logout <i className="fa-solid fa-right-from-bracket"></i></button>
       
        
      </Container>
    </Navbar>
  )
}

export default Header