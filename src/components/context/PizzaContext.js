import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PizzaContext = createContext();
export const PizzaProvider = (props) => {
  const [pizzas, setPizzas] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPizzas, setNumberOfPizzas] = useState([]);


  useEffect(() => {    
    
    axios.get("http://localhost:8080/pizzas?page="+page).then((res) => {
      setPizzas(res.data);
    });
  }, [page]);

  useEffect(() => {    
    axios.get("http://localhost:8080/pizzas/numberOfPizzas").then((res) => {
      setNumberOfPizzas(res.data);
    });
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, setPizzas, page, setPage, numberOfPizzas}}>
      {props.children}
    </PizzaContext.Provider>
  );
};

export default PizzaContext;
