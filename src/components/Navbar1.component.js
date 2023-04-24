import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar1.css'
import "bootstrap/dist/css/bootstrap.min.css";


const Navbar1 = (props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link to="/" className="navbar-brand">BookFinds</Link>
      <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
      <li className="navbar-item">
        <Link to="/list-view" className="nav-link">Book List</Link>
        </li>
        <li className="navbar-item">
        <Link to="/create-book" className="nav-link">Create Book Entry</Link>
        </li>
        <li className="navbar-item">
        <Link to="/navbar" className="nav-link">Find Book</Link>
        </li>
        <li className="navbar-item">
        <Link to="/users" className="nav-link">Create User</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar1;
