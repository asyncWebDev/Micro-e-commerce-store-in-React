import { useEffect, useState, useContext } from "react";
import CartContext from "../../../context/cart-context";
import CartElement from "../Cart/CartElement";
import classes from "./Cart.module.css";

export default function Cart() {
  const cartCtx = useContext(CartContext);

  const [sum, setSum] = useState(0);

  useEffect(() => {
    const sumCart = cartCtx.cart
      .filter((item) => item !== null)
      .reduce((acc, item) => {
        return acc + item.price;
      }, 0);
    return setSum(sumCart);
  }, [cartCtx.cart]);

  return (
    <div>
      <li className={classes.cart}>
        {cartCtx.cart.length > 0 ? (
          cartCtx.cart.map((item) => {
            return (
              <CartElement
                key={item.id}
                id={item.id}
                image={item.image}
                price={item.price}
                title={item.title}
              />
            );
          })
        ) : (
          <p>There is no item in your cart</p>
        )}
      </li>
      <div>{cartCtx.cart.length > 0 ? <span>{sum}</span> : ""}</div>
    </div>
  );
}
