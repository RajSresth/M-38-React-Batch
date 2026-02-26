import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const handleStyle = ({ isActive }) =>
    isActive
      ? { textDecoration: "2px solid underline crimson",         textUnderlineOffset:"10px",
        color:"crimson"
       }
      : { textDecoration: "none" };

  return (
    <header>
      <div className={style["center-container"]}>
        <div className={style.logo}>LOGO</div>
        <nav className={style.navbar}>
          <NavLink style={handleStyle} to="">
            Home
          </NavLink>
          <NavLink style={handleStyle} to="about">
            About
          </NavLink>
          <NavLink style={handleStyle} to="career">
            Career
          </NavLink>
          <NavLink style={handleStyle} to="services">
            Services
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
