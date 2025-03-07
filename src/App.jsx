
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Workout from './pages/Workout'
import Auth from './pages/Auth'
import Footer from './components/Footer'

import AdminAuth from './pages/AdminAuth'
import AdminAddWorkout from './pages/AdminAddWorkout'
// import AdminHome from './pages/AdminHome'
import BMICalculator from './pages/BmiCalc'
import CalorieCalculator from './pages/CalorieCalc'
import OTPVerification from './pages/Otp'
import LegWorkout from './components/LegWorkout'
import AbsWorkout from './components/AbsWorkout'
import ChestWorkout from './components/ChestWorkout'
import ShoulderWorkout from './components/ShoulderWorkout'

import { useContext, useEffect } from 'react'
import { tokenAuthContext } from './contexts/AuthContextAPI'
import Pnf from './pages/Pnf'
import Chat from './pages/Chat'
import AdminUploadedWorkouts from './pages/AdminUploadedWorkouts'
import Layout from './components/adminShared/Layout'
import AdminUserManagement from './pages/AdminUserManagement'

const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  if ( location.pathname === "/adminlogin"  ) {
    return children; // admin Login page without sidebar
  }
  return <Layout>{children}</Layout>;
};


function App() {
  
  const { isAuthorised, setIsAuthorised } = useContext(tokenAuthContext)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthorised(true)
    } else {
      setIsAuthorised(false)
    }
  }, [isAuthorised])  // it will work without this 


  return (

    
    <>
     

<Routes>

  {/* user side */}
  <Route path="/" element={<Home />} />

  {
    isAuthorised &&
    <>
    <Route path="/workout" element={<Workout />} />
    <Route path="/bmiCalc" element={<BMICalculator/>} />
    <Route path="/calorieCalc" element={<CalorieCalculator/>} />
    </>
   
  }

  <Route path="/login" element={<Auth />} />
  <Route path="/register" element={<Auth insideRegister={true} />} />
  <Route path="/otp" element={<OTPVerification />} />
  <Route path="/workout/legWorkout" element={<LegWorkout />} />
  <Route path="/workout/absWorkout" element={<AbsWorkout />} />
  <Route path="/workout/chestWorkout" element={<ChestWorkout />} />
  <Route path="/workout/shoulderWorkout" element={<ShoulderWorkout />} />
  <Route path='/*' element={<Pnf />} />
  <Route path="/chat" element={<Chat/>} />
  



  {/* admin side */}
  <Route path="/adminLogin" element={<AdminAuth />} />
  {/* <Route path="/adminHome" element={<AdminHome />} /> */}

  <Route element={<LayoutWrapper/>}>
  <Route path="/adminUploadedWorkouts" element={<AdminUploadedWorkouts />} />
  <Route path="/adminAddWorkout" element={<AdminAddWorkout/>} />
  <Route path="/userManagemenet" element={<AdminUserManagement/>} />
  </Route>
  
</Routes>


      
      <Footer/>
    </>
  )
}

export default App
