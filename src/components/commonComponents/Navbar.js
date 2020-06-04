import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link className="link" to="/">
        Pizzas
      </Link>

      <span className="separator"> | </span>
      
      <Link className="link" to="/contact">
        Contact
      </Link>

      <span className="separator"> | </span>

      <Link className="link" to="/orders/active">Active Orders</Link>
    </div>
  );
};

export default Navbar;
