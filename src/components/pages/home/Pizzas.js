import React, { useContext } from "react";
import Pizza from "./Pizza";
import PizzaContext from "../../context/PizzaContext";
import { Row, Col } from 'antd';

const Pizzas = () => {
  const { pizzas } = useContext(PizzaContext);

  return (
    <div> 
      {pizzas.map((pizza) => (
        <Row key={pizza.id} > 
        <Col span={24}  key={pizza.id}>
        <Pizza
            id={pizza.id}
            name={pizza.name}
            description={pizza.description}
            price={pizza.price}
          />
        </Col>
        </Row>     
        
        
              ))}
    </div>
  );
};

export default Pizzas;
