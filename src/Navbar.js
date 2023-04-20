import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import List from "./List";

const Navbar = () => {
  const navigate = useNavigate();

  const handleEnterClick = () => {
    navigate("/list");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="greeting">Welcome, User!</span>
      </div>
      <div className="navbar-center">
        <h1 className="navbar-header">Your List</h1>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="logout-btn">Logout</button>
        <button className="enter-btn" onClick={handleEnterClick}>
          Enter
        </button>
        <div className="hamburger-menu">
          {/* Hamburger menu icon */}
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* Hamburger menu content */}
          <ul className="hamburger-menu-content">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

