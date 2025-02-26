import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'300px'}} className='mt-5 container w-100 '>
      <div className='d-flex justify-content-between '>
      
        {/* intro */}
        <div>
        <h5>
        <i class="fa-solid fa-dumbbell me-2"></i> 
        Fitness World
        </h5>
        <p>Designed and built with all the love in the world <br /> by the Fitness world team with the help of our contributors.</p>
        <p>Code licensed MIT, docs CC BY 3.0.</p>
        <p>Currently v5.3.3.</p>
        
        </div>
        {/* links */}
        <div className='d-flex flex-column'>
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none' , color:'white'}} >Home Page</Link>
          <Link to={'/login'} style={{textDecoration:'none' , color:'white'}} >Login Page</Link>
          <Link to={'/register'} style={{textDecoration:'none' , color:'white'}} >Register Page</Link>
        </div>
        {/* guides */}
        <div className='d-flex flex-column'>
          <h5>Guides</h5>
          <a href="https://react.dev/" style={{textDecoration:'none', color:'white'}} target='_blank'>React</a>
          <a href="https://react-bootstrap.github.io/" style={{textDecoration:'none', color:'white'}} target='_blank'>React Bootstrap</a>
          <a href="https://reactrouter.com/" style={{textDecoration:'none', color:'white'}} target='_blank'>React Router</a>

        </div>
        {/* contact */}
        <div className='d-flex flex-column'>
        <h5>Contacts</h5>
        <div className='d-flex'>
          <input type="text" className='form-control me-3' placeholder='Enter Your Email Here...'/>
          <button className='btn btn-warning'><i className="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className='d-flex justify-content-between mt-3'>
          <a href="https://x.com/__x" style={{textDecoration:'none', color:'white'}} target='_blank'><i className="fa-brands fa-x-twitter"></i></a>
          <a href="https://www.instagram.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i className="fa-brands fa-instagram"></i></a>
          <a href="https://www.facebook.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i className="fa-brands fa-facebook"></i></a>
          <a href="" style={{textDecoration:'none', color:'white'}}><i className="fa-solid fa-phone" target='_blank'></i></a>
          <a href="https://in.linkedin.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
        </div>
        </div>
        </div>
      <p className='text-center mt-3'>Copyright ©Media Player Inc. All rights reserved.</p>
    </div>
  )
}

export default Footer