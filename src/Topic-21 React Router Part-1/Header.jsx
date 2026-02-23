import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
        <div className="logo">LOGO</div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>
        </nav>
    </div>
  )
}

export default Header