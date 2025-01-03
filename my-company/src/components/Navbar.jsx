import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'flex-start',backgroundColor:'beige'}}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
