import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link className="link" to="/">
        Pizzas
      </Link>
      <span className="separator"> | </span>
      <Link className="link" to="/contacts">
        Contacts
      </Link>
    </div>
  );
};

export default Navbar;
