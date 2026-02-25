import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Header = () => {

  const handleStyle = ({isActive, isPending, isTransition}) => {
     return isActive ? {color: "red", fontSize:"bold"}: {color: "black", fontSize:"normal"}
  }

  return (
    <div className="header">
        <div className="logo">LOGO</div>
        <nav>
            <NavLink to="/" style={handleStyle}>Home</NavLink>
            <NavLink to="/posts" style={handleStyle} >Posts</NavLink>
            <NavLink to="/todos" style={handleStyle} >Todos</NavLink>
            <NavLink to="/albums" style={handleStyle}>Albums</NavLink>
            <NavLink to="/services" style={handleStyle}>Services</NavLink>
        </nav>
    </div>
  )
}

export default Header