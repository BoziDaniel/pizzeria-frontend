import React, { useContext } from "react";
import Pizza from "./Pizza";
import PizzaContext from "../../context/PizzaContext";

const Pizzas = () => {
  const { pizzas } = useContext(PizzaContext);

  return (
    <div>
      {pizzas.map((pizza) => (
        <div key={pizza.id}>
          <Pizza
            id={pizza.id}
            name={pizza.name}
            description={pizza.description}
            price={pizza.price}
          />
        </div>
      ))}
    </div>
  );
};

export default Pizzas;
