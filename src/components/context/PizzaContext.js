import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PizzaContext = createContext();
export const PizzaProvider = (props) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    
    axios.get("http://localhost:8080/pizzas/1").then((res) => {
      setPizzas(res.data);
    });
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, setPizzas }}>
      {props.children}
    </PizzaContext.Provider>
  );
};

export default PizzaContext;
