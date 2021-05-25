import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { MdPermContactCalendar } from 'react-icons/md';
import { RiLogoutBoxFill } from 'react-icons/ri';

const Topbar = () => {
  return (
    <Navbar className="Navbar">
      <div className="container">
        <Navbar.Brand href="/">
          <h3>
            <MdPermContactCalendar />

            <strong>Contact Keeper</strong>
          </h3>
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/register">Register</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/login">
            <RiLogoutBoxFill />
            Logout
          </Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Topbar;
