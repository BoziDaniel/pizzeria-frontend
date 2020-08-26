import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { LoginContext } from "../context/LoginContext";
const Navbar = () => {
  const { LoggedInAsRole } = useContext(LoginContext);

  return (
    <div>
      <Link className="link" to="/">
        <Button size={"large"}>
          <b>Pizzas</b>
        </Button>
      </Link>

      <Link className="link" to="/contact">
        <Button size={"large"}>
          <b>Contact</b>
        </Button>
      </Link>
      {LoggedInAsRole === "" ? null : (
        <Link className="link" to="/orders/active">
          <Button size={"large"}>
            <b>Active Orders</b>
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
