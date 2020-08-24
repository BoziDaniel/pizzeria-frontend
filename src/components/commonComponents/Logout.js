import React, { useContext } from "react";
import { Button, Row, Col } from "antd";
import { LoginContext } from "../context/LoginContext";

const Logout = () => {
  const { LoggedInAsRole, setLoggedInAsRole } = useContext(LoginContext);

  const handleLogout = (e) => {
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
          {"Logged in as " + LoggedInAsRole.substring(5)}
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
