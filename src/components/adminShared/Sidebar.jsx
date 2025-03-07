
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
   FaUsers, FaBars, FaTimes, FaCloudUploadAlt
} from 'react-icons/fa';
import { IoIosFitness } from "react-icons/io";
import { Button, Nav } from 'react-bootstrap';

const SidebarItem = ({ icon, text, to, isOpen }) => (
  <Nav.Link as={Link} to={to} className={`d-flex align-items-center p-2 text-dark ${isOpen ? '' : 'justify-content-center'}`}>  
    {/* {icon} */}
    <span style={{ fontSize: '1.3rem' }}>{icon}</span>
    {isOpen && <span className="ms-2 ">{text}</span>}
  </Nav.Link>
);

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`bg-light shadow-sm transition-all ${isOpen ? 'w-25' : 'w-10'} min-vh-100 position-relative p-3`}> 
      <Button 
        onClick={toggleSidebar} 
        variant="danger" 
        className="position-absolute top-0 end-0 m-2 p-1"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </Button>
      <div className="mb-4 text-center">
        <h2 className={`fw-bold text-danger ${isOpen ? '' : 'd-none'}`}>Fitness World</h2>
      </div>
      <Nav className="flex-column ">
       <SidebarItem icon={<IoIosFitness />} text="Uploaded Workouts" to="/AdminUploadedWorkouts" isOpen={isOpen} />
        <SidebarItem icon={<FaCloudUploadAlt />} text="Add Workout" to="/AdminAddWorkout" isOpen={isOpen} />
        <SidebarItem icon={<FaUsers />} text="Users" to="/userManagemenet" isOpen={isOpen} />
        
      </Nav>
    </div>
  );
};

export default Sidebar;

