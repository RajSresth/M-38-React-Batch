import React from "react";
import { useCart } from "../../Topic-26 Advanced useReducer ContextAPI/CartContext";

const Card = ({ card, profile, pic, info, element, cartItem }) => {
 
  const {state,dispatch} = useCart()


  const addProduct = (product) => {


     dispatch({type:"ADD_ITEM", payload: {
       _id:product._id,
       category: product.category,
       price: product.price,
       image: product.image
     }})
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
          >
            -
          </button>
          <span style={{ padding: "2px 10px" }}>1</span>
          <button
            type="button"
            style={{ padding: "2px 15px", cursor: "pointer" }}
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
