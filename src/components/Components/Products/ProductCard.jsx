import React, { useContext, useEffect } from "react";
import classes from "./ProductCard.module.css";
import CartContext from "../../../context/cart-context";
import Card from "./../UI/Card";

export default function (props) {
  const cartCtx = useContext(CartContext);

  const addToCart = () => {
    cartCtx.onAddToCart({
      id: props.id,
      image: props.image,
      title: props.title,
      price: props.price,
    });
  };

  return (
    <Card className={classes["product-card"]}>
      <div className={classes["product-image"]}>
        <img src={props.image} alt="product image" />
        <i className="bx bx-star"></i>
      </div>
      <div className={classes["product-description"]}>
        <p>{props.title}</p>
        <span>{props.price}</span>
        <button className={classes["product-add-to-cart"]} onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </Card>
  );
}
