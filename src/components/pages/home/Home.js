import React, { useContext } from "react";
import Pizzas from "./Pizzas";
import { Pagination } from 'antd';
import PizzaContext from "../../context/PizzaContext";




const Home = () => {
  const { page, setPage } = useContext(PizzaContext);

  const handlePizzasPageChange = (value) => {
    
    setPage(value);
  };

  return (
    <div  style={{ background: "#8c8c8c" }} justify="space-around" align="middle">
      <Pizzas />
      <Pagination defaultCurrent={1} total={50} onChange={handlePizzasPageChange}/>
    </div>
  );
};



export default Home;
