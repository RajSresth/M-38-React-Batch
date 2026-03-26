import React from "react";
import { useCart } from "../../Topic-26 Advanced useReducer ContextAPI/CartContext";

const Card = ({ card, profile, pic, info, element, cartItem=undefined }) => {
 
  const {state,dispatch} = useCart()


  const addProduct = (product) => {


     dispatch({
            type:"ADD_ITEM",
            payload: {
              _id:product._id,
              category: product.category,
              description:product.description,
              price: product.price,
              image: product.image
          }
    })
  } 


  const updateItem = (id) => {
  
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


  const findItemQuantity = () => {
      const item = state.cart.find((item) => item?._id === element?._id)
      return item.qty;
  }



  return (
    <div className={card}>
      <div className={profile}>
        <img className={pic} src={element.image[0]} alt="" />
      </div>
      <div className={info}>
        <h2
          style={{
            textTransform: "uppercase",
            fontSize: "18px",
            color: "black",
          }}
        >
          {element.category}
        </h2>
      </div>
      {cartItem ? (
        <div>
          <button
            type="button"
            style={{ padding: "2px 15px", cursor: "pointer" }}
            onClick={() => decreaseItem(element._id)}
          >
            -
          </button>
          <span style={{ padding: "2px 10px" }}>{findItemQuantity()}</span>
          <button
            type="button"
            style={{ padding: "2px 15px", cursor: "pointer" }}
            onClick={() => updateItem(element._id) }
          >
            +
          </button>
        </div>
      ) : (
        <button
          type="button"
          style={{ padding: "2px 15px", cursor: "pointer" }}
          onClick={() => addProduct(element)}
        >
          Add Item
        </button>
      )}
    </div>
  );
};

export default Card;