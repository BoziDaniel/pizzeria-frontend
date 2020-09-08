import React, { useContext } from "react";
import { Button, Row, Col } from "antd";
import { LoginContext } from "../context/LoginContext";
import { ActiveOrderContext } from "../context/ActiveOrderContext";
import { CartContext } from "../context/CartContext";

const Logout = () => {
  const { LoggedInAsRole, setLoggedInAsRole } = useContext(LoginContext);
  const { setNeedsRefresh } = useContext(ActiveOrderContext);
  const { setCartItems } = useContext(CartContext);

  const handleLogout = (e) => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    setLoggedInAsRole("");
    setNeedsRefresh(true);
    setCartItems([]);
    alert("logout");
  };
  return (
    <Row>
      <Col
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {LoggedInAsRole !== null
          ? "Logged in as " + LoggedInAsRole.substring(5)
          : "not logged in"}
      </Col>
      <Col>
        <Button
          style={{ marginLeft: 5 }}
          id="logoutbutton"
          type="button"
          value="logout"
          onClick={handleLogout}
        >
          <b>logout</b>
        </Button>
      </Col>
    </Row>
  );
};

export default Logout;
