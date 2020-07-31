import React from "react";
import Login from "./Login"
import Navbar from "./Navbar"
const Header = () => {
  return (
    <div style={{ background: "#d4b106" }}>
      PizzaShop
      <Login />
      <Navbar/>
    </div>
  );
};

export default Header;
