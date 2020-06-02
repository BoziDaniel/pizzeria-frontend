import React from "react";
import Header from "../../commonComponents/Header";
import Navbar from "../../commonComponents/Navbar";
import Pizzas from "./Pizzas";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Pizzas />
    </div>
  );
};

export default Home;
