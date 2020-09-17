import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { LoginContext } from "../context/LoginContext";
import { ActiveOrderContext } from "../context/ActiveOrderContext";
const Navbar = () => {
  const { LoggedInAsRole } = useContext(LoginContext);
  const { setNeedsRefresh } = useContext(ActiveOrderContext);
  const handleClick = () => {
    setNeedsRefresh(true);
  };
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
          <Button size={"large"} onClick={handleClick}>
            <b>Active Orders</b>
          </Button>
        </Link>
      )}

    {LoggedInAsRole === "ROLE_MANAGER" ? (
        <Link className="link" to="/manage/users">
          <Button size={"large"} onClick={handleClick}>
            <b>Manage users</b>
          </Button>
        </Link>
      ):null}
    </div>
  );
};

export default Navbar;
