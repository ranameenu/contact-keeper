import React, { useState } from 'react';
import { MdPermContactCalendar } from 'react-icons/md';
import { RiLogoutBoxFill } from 'react-icons/ri';

const Topbar = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container">
          <a className="navbar-brand" href="/">
            <MdPermContactCalendar /> Contact Keeper
          </a>
          <button className="navbar-toggler border border-info text-info">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link text-light "
                  aria-current="page"
                  href="/register"
                >
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  Add Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  <RiLogoutBoxFill /> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
