import React, { createContext, useState, useEffect } from "react";
export const CartContext = createContext();
export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([
    // { id: 400, name: "salami", quantity: 3, price: 3000 },
    // { id: 4001, name: "4seasons", quantity: 2, price: 3000 },
  ]);
  // const [sum, setSum] = useState(0);
  useEffect(() => {}, [cartItems]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
