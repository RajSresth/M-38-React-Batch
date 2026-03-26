import { useContext } from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Day-24 Browser Router and ContextAPI/AuthContext";
import { useCart } from "../../Day-26 Advanced useReducer ContextAPI/CartContext";

const Header = () => {
  console.log("Header Render")
  const { user, logout } = useAuth();

  const {state} = useCart()

  const totalItems = () => {
    return state.cart.reduce((acc,item) =>{
      acc = acc + item.qty;
      return acc;
    } ,0)
  }

  const totalPrice = () => {
   const total = state.cart.reduce((sum,item) => {
                      sum = sum + item.price * item.qty;
                      return sum;
                    },0)
      return total;
  }

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
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ fontWeight: "bold" }}>{user.username}</span>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "1px solid black",
                  overflow: "hidden",
                }}
              >
                <img
                  src={user.pic}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "fill" }}
                />
              </div>
              <button
                style={{
                  backgroundColor: "crimson",
                  color: "white",
                  padding: "10px 30px",
                  border: "none",
                  outline: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                onClick={() => logout()}
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink to="login">
              <button
                style={{
                  backgroundColor: "#0064e0",
                  color: "white",
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

          <NavLink to="cart">
            <button
                style={{
                  backgroundColor: "#0f8811",
                  color: "white",
                  padding: "10px 30px",
                  border: "none",
                  outline: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}>
                  Cart 
                  {totalItems() ===0 ?"" :<span> {totalItems()}</span>}
                  {totalPrice() ===0 ?"" :<p>&#x20B9; {totalPrice()}</p>}
                </button>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;