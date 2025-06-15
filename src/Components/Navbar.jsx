import React from 'react';
import '../Style/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='navbar-header'>
        <div className="navbar-logo">
          <Link to={"/home"}>
          <img src={require('../Images/WebisteLogo.png')} alt="Website Logo" />
          </Link>
        </div>
        <div>
          <h1 className='navbar-header-h1'>We Hospital</h1>
        </div>
      </div>
      <ul className="navbar-links">
        <li><Link to={"/home"}>Home</Link></li>
        <li><Link to={"/appointment"}>Appointment</Link></li>
        <li><Link to={"/service"}>Service</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/contact"}>Contact us</Link></li>
        <li><Link to={"/login"}>Login</Link></li>
        <li><Link to={"/signup"} className="signup-btn">Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
