
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Workout from './pages/Workout'
import Auth from './pages/Auth'
import Footer from './components/Footer'
import WorkoutList from './pages/WorkoutList'
import AdminAuth from './pages/AdminAuth'
import AdminAddWorkout from './pages/AdminAddWorkout'
import AdminHome from './pages/AdminHome'
import BMICalculator from './pages/BmiCalc'
import CalorieCalculator from './pages/CalorieCalc'
import OTPVerification from './pages/Otp'
// import { useContext } from 'react'
// import { tokenAuthContext } from './contexts/AuthContextAPI'


function App() {
  
  // const { isAuthorised, setIsAuthorised } = useContext(tokenAuthContext)
  return (

    
    <>
     

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/workout" element={<Workout />} />
  <Route path="/workoutList/:id" element={<WorkoutList />} />
  <Route path="/login" element={<Auth />} />
  <Route path="/register" element={<Auth insideRegister={true} />} />
  <Route path="/bmiCalc" element={<BMICalculator/>} />
  <Route path="/calorieCalc" element={<CalorieCalculator/>} />
  
  <Route path="/adminLogin" element={<AdminAuth />} />
  <Route path="/adminHome" element={<AdminHome />} />
  <Route path="/adminAddWorkout" element={<AdminAddWorkout/>} />

  <Route path="/otp" element={<OTPVerification />} />
</Routes>


      
      <Footer/>
    </>
  )
}

export default App
