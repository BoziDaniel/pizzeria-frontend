import React, { useContext } from "react";
import Pizzas from "./Pizzas";
import { Pagination } from 'antd';
import PizzaContext from "../../context/PizzaContext";




const Home = () => {
  const { page, setPage } = useContext(PizzaContext);
  const { numberOfPizzas } = useContext(PizzaContext);

  const handlePizzasPageChange = (value) => {
      setPage(value);
  };

  return (
    <div  style={{ background: "#8c8c8c" }} justify="space-around" align="middle">
      <Pagination defaultCurrent={page} total={numberOfPizzas} onChange={handlePizzasPageChange} pageSizeOptions={[]} />
      <Pizzas />
      <Pagination defaultCurrent={page} total={numberOfPizzas} onChange={handlePizzasPageChange} pageSizeOptions={["10"]}/>
    </div>
  );
};



export default Home;
