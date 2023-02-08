import { useReducer, useState, useContext } from "react";

import CartContext from "../../../context/cart-context";
import Card from "../UI/Card";
import classes from "./CartElement.module.css";

const productReducer = (state, action) => {
  if (action.type === "increaseQuantity" && state.quantity >= 1) {
    return {
      quantity: state.quantity + 1,
    };
  }
  if (action.type === "decreaseQuantity" && state.quantity > 1) {
    return {
      quantity: state.quantity - 1,
    };
  }
  return state;
};

export default function (props) {
  const cartCtx = useContext(CartContext);
  const [product, dispatch] = useReducer(productReducer, {
    quantity: 1,
  });

  const produtPrice = product.quantity * props.price;

  const increaseQuantity = () => {
    dispatch({ type: "increaseQuantity" });
  };

  const decreaseQuantity = () => {
    dispatch({ type: "decreaseQuantity" });
  };

  const removeFromCartHandler = () => {
    cartCtx.setCart((prev) => [...prev].filter((item) => item.id !== props.id));
  };

  return (
    <Card id={props.id}>
      <div className={classes["cart-element"]}>
        <div className={classes["cart-element-jpg-title"]}>
          <img src={props.image} alt="cart-element-image" />
          <p>{props.title}</p>
        </div>
        <div className={classes["cart-element-label"]}>
          <div>
            <button onClick={decreaseQuantity}>{"<"}</button>
            <span id="quantity">{product.quantity}</span>
            <button onClick={increaseQuantity}>{">"}</button>
          </div>
          <button onClick={removeFromCartHandler}>Remove from cart</button>
          <span>{produtPrice}</span>
        </div>
      </div>
    </Card>
  );
}
