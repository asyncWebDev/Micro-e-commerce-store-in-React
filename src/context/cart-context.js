import React, { useEffect, useState } from "react";

const CartContext = React.createContext({
  cart: [],
  onAddToCart: (item) => {},
});

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  const addToCartHandler = (item) => {
    setCart((prevItems) => [...prevItems, item]);
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        setCart: setCart,
        onAddToCart: addToCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
