
import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <div className="d-flex min-vh-100">
      <Sidebar />
      <Container fluid className="flex-grow-1 bg-light p-4">
        {children}
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
