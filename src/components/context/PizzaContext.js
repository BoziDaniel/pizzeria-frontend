import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PizzaContext = createContext();
export const PizzaProvider = (props) => {
  const [pizzas, setPizzas] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {}, [page]);

  useEffect(() => {    
    axios.get("http://localhost:8080/pizzas?page="+page).then((res) => {
      setPizzas(res.data);
      console.log(page);
    });
  }, [page]);

  return (
    <PizzaContext.Provider value={{ pizzas, setPizzas, page, setPage }}>
      {props.children}
    </PizzaContext.Provider>
  );
};

export default PizzaContext;
