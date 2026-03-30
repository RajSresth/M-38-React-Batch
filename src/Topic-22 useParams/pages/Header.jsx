import { useContext } from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuthStore from "../../Topic-28 Zustand/authStore";

const Header = () => {
  console.log("Header Render");
  const { user, isAuthenticated, logout } = useAuthStore();

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = () => {
    return cartItems.reduce((acc, item) => {
      acc = acc + item.quantity;
      return acc;
    }, 0);
  };

  const totalPrice = () => {
    const total = cartItems.reduce((sum = 750, item) => {
      sum = sum + item.price * item.quantity;
      return sum;
    }, 0);
    return total;
  };

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
          {isAuthenticated ? (
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
              }}
            >
              Cart
              {totalItems() === 0 ? "" : <span> {totalItems()}</span>}
              {totalPrice() === 0 ? "" : <p>&#x20B9; {totalPrice()}</p>}
            </button>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
