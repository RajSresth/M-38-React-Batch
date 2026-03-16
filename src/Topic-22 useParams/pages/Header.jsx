import  { useContext } from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import {AuthContext} from "../../Topic-24 Browser Router and ContextAPI/AuthContext"

const Header = () => {
  const {user} = useContext(AuthContext);
  console.log(user)

  const handleStyle = ({ isActive }) =>
    isActive
      ? {
          textDecoration: "2px solid underline crimson",
          textUnderlineOffset: "10px",
          color: "crimson",
        }
      : { textDecoration: "none" };

  return (
    <header>
      <div className={style["center-container"]}>
        <div className={style.logo}>
          <NavLink to="/">LOGO</NavLink>
        </div>
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
          {user ? (
            <div style={{ display: "flex", alignItems: "center", gap: "16px"}}>
              <span style={{ fontWeight: "bold" }}>{user.username}</span>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "1px solid black",
                  overflow:"hidden",
                }}
              >
                <img src={user.pic} alt="" style={{width:"100%", height:"100%", objectFit:"fill"}}/>
              </div>
              <button style={{
                  backgroundColor: "crimson",
                  color:"white",
                  padding: "10px 30px",
                  border: "none",
                  outline: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }} >Logout</button>
            </div>
          ) : (
            <NavLink to="login">
              <button
                style={{
                  backgroundColor: "#0064e0",
                  color:"white",
                  padding: "10px 30px",
                  border: "none",
                  outline: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Login
              </button>
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
