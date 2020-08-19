import React, { createContext, useState, useEffect } from "react";
export const CartContext = createContext();
export const CartProvider = (props) => {
  const [addedPizzas, setAddedPizzas] = useState([]);

  useEffect(() => {
      
  }, [addedPizzas])
  return ( <CartContext.Provider value= {{addedPizzas, setAddedPizzas}}>
      {props.children}
  </CartContext.Provider>
  );
};

export default CartContext;
