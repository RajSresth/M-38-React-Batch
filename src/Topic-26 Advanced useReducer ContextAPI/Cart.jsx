import React from "react";
import { useCart } from "./CartContext";
import style from "./Cart.module.css";

const Cart = () => {
  const { state, dispatch } = useCart();

  return (
    <div className={style["cart-container"]}>
      <h2 className={style["cart-title"]}>Welcome to Cart Page</h2>

      <div className={style.cart}>
        {state.cart.length === 0 ? (
          <h3>Your Cart is Empty</h3>
        ) : (
          "Cart me kuch to"
        )}
      </div>
    </div>
  );
};

export default Cart;
