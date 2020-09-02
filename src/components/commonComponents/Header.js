import React, { useContext, useEffect } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Navbar from "./Navbar";
import { Row, Col } from "antd";
import { LoginContext } from "../context/LoginContext";
import RegistrationModal from "./RegistrationModal";

const Header = () => {
  const { LoggedInAsRole } = useContext(LoginContext);
  useEffect(() => {
    
  }, [LoggedInAsRole]);
  return (
    <div style={{ background: "#d4b106" }}>
      <h1>PizzaShop</h1>
      <Row justify="space-between">
        <Col>
          <Navbar />
        </Col>
        <Col>
          <div>{LoggedInAsRole === "" ? <div><RegistrationModal/><Login /></div> : <Logout />}</div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
