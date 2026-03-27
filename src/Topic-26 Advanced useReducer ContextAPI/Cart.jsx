import React from "react";
import style from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart, increaseItem, decreaseItem } from "../Topic-27 Redux Tool Kit/CartSlice";

const Cart = () => {

  const dispatch = useDispatch()
  const cartItem = useSelector((state) => state.cart.items)

  const findItemQuantity = (id) => {
      const item =cartItem.find((item) => item?._id === id)
      return item.quantity;
  }



  return (
    <div className={style["cart-container"]}>
      <h2 className={style["cart-title"]}>Welcome to Cart Page</h2>
      <button type="button" className={style["clear-cart-btn"]} onClick={() => dispatch(clearCart())}>Clear Cart</button>
      <div className={style.cart}>
        {cartItem.length === 0 ? (
          <h3>Your Cart is Empty</h3>
        ) : (
              cartItem.map(item => <div key={item._id} className={style["cart-item"]}>
                <div className={style.left}>
                  <img src={item.image[0]} alt="" className={style["item-image"]} />
                </div>
                <div className={style.mid}>
                  <h4>{item.category}</h4>
                  <p className={style.description}>{item.description}</p>
                  <h5>&#x20B9; {Math.round(item.price * item.quantity)}</h5>
                </div>
                <div className={style.right}>
                   <button
                      type="button"
                      style={{ padding: "2px 15px", cursor: "pointer" }}
                      onClick={() => dispatch(decreaseItem(item._id))}
                    >
                      -
                    </button>
                    <span style={{ padding: "2px 10px" }}>{findItemQuantity(item._id)}</span>
                    <button
                      type="button"
                      style={{ padding: "2px 15px", cursor: "pointer" }}
                      onClick={() => dispatch(increaseItem(item._id) )}
                    >
                      +
                    </button>
                    <button
                     type="button"
                      style={{ padding: "5px 20px",borderRadius:"5px", cursor: "pointer", backgroundColor:"red",color:"white",border:"none", letterSpacing:"2px" }}
                      onClick={() => dispatch(removeItem(item._id)) }
                      >
                        remove
                      </button>
                </div>
              </div> )
        )}
      </div>
    </div>
  );
};

export default Cart;