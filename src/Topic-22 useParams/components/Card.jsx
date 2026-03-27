import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  increaseItem,
  decreaseItem,
} from "../../Topic-27 Redux Tool Kit/CartSlice";

const Card = ({ card, profile, pic, info, element }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items); // [ {} ]

  const getCartItem = (id) => {
    const item = cartItem.find((item) => item._id === id);
    return item; // {}
  };

  const isItemAvailable = getCartItem(element._id);

  const findItemQuantity = (id) => {
    const item = cartItem.find((item) => item._id === id);
    return item.quantity;
  };

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
      {isItemAvailable ? (
        <div>
          <button
            type="button"
            style={{ padding: "2px 15px", cursor: "pointer" }}
            onClick={() => dispatch(decreaseItem(element._id))}
          >
            -
          </button>
          <span style={{ padding: "2px 10px" }}>
            {findItemQuantity(element._id)}
          </span>
          <button
            type="button"
            style={{ padding: "2px 15px", cursor: "pointer" }}
            onClick={() => dispatch(increaseItem(element._id))}
          >
            +
          </button>
        </div>
      ) : (
        <button
          type="button"
          style={{ padding: "2px 15px", cursor: "pointer" }}
          onClick={() => dispatch(addItem(element))}
        >
          Add Item
        </button>
      )}
    </div>
  );
};

export default Card;
