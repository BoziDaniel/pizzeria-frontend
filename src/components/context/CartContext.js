import React, { createContext, useState, useEffect } from "react";
export const CartContext = createContext();
export const CartProvider = (props) => {
  const [sumPrice, setSumPrice] =  useState([]);
  const [cartItems, setCartItems] = useState([]);
   
  useEffect(() => {
    let sum = 0;
    for(let index = 0; index < cartItems.length; index++){
      sum += cartItems[index].quantity * cartItems[index].price;
    }
    setSumPrice(sum);
  }, [cartItems]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems, sumPrice}}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
