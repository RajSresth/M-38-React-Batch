import React from "react";
import { useCart } from "./CartContext";
import style from "./Cart.module.css";

const Cart = () => {
  const { state, dispatch } = useCart();

    const increaseItem = (id) => {
  
      dispatch({
        type:"INCREASE_QTY",
        payload: id
      })
  }


  const decreaseItem = (id) => {
    dispatch({
      type:"DECREASE_QTY",
      payload:id
    })
  }

  const removeItem = (id) => {
    dispatch({
      type:"REMOVE_ITEM",
      payload:id
    })
  }


  const findItemQuantity = (id) => {
      const item = state.cart.find((item) => item?._id === id)
      return item.qty;
  }

  const handleClearCart = () => {
    dispatch({type:"CLEAR_ALL"})
  }


  return (
    <div className={style["cart-container"]}>
      <h2 className={style["cart-title"]}>Welcome to Cart Page</h2>
      <button type="button" className={style["clear-cart-btn"]} onClick={handleClearCart}>Clear Cart</button>
      <div className={style.cart}>
        {state.cart.length === 0 ? (
          <h3>Your Cart is Empty</h3>
        ) : (
              state.cart.map(item => <div key={item._id} className={style["cart-item"]}>
                <div className={style.left}>
                  <img src={item.image[0]} alt="" className={style["item-image"]} />
                </div>
                <div className={style.mid}>
                  <h4>{item.category}</h4>
                  <p className={style.description}>{item.description}</p>
                  <h5>&#x20B9; {Math.round(item.price * item.qty)}</h5>
                </div>
                <div className={style.right}>
                   <button
                      type="button"
                      style={{ padding: "2px 15px", cursor: "pointer" }}
                      onClick={() => decreaseItem(item._id)}
                    >
                      -
                    </button>
                    <span style={{ padding: "2px 10px" }}>{findItemQuantity(item._id)}</span>
                    <button
                      type="button"
                      style={{ padding: "2px 15px", cursor: "pointer" }}
                      onClick={() => increaseItem(item._id) }
                    >
                      +
                    </button>
                    <button
                     type="button"
                      style={{ padding: "5px 20px",borderRadius:"5px", cursor: "pointer", backgroundColor:"red",color:"white",border:"none", letterSpacing:"2px" }}
                      onClick={() => removeItem(item._id) }
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