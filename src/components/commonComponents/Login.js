import React, { useState, useContext } from "react";
import axios from "axios";
import { Button, Input, Row, Col } from "antd";
import { LoginContext } from "../context/LoginContext";
import { ActiveOrderContext } from "../context/ActiveOrderContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setLoggedInAsRole } = useContext(LoginContext);
  const { setNeedsRefresh } = useContext(ActiveOrderContext);
  const handleLogin = (e) => {
    const creditentials = { username: username, password: password };
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.post("http://localhost:8080/login", creditentials).then((resp) => {
      setLoggedInAsRole(resp.data.roles[0]);
      const token = resp.data.token;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("role", resp.data.roles[0]);
      setNeedsRefresh(true);
      if (sessionStorage.getItem("token") !== "") {
        alert("logged in");
      } // Error handling missing, what happens if i get 403, etc.
    });
  };
  const updateUsername = (e) => setUsername(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  return (
    <div id="login">
      <form action="/login" method="post">
        <Input.Group size="default">
          <Row gutter={8}>
            <Col>
              <Input
                size="default"
                maxLength={"50"}
                style={{ marginLeft: 10, marginRight: 5 }}
                id="username"
                type="text"
                required
                placeholder="username"
                onChange={updateUsername}
              />
            </Col>
            <Col>
              <Input
                size="default"
                style={{ marginLeft: 5, marginRight: 5 }}
                id="password"
                type="password"
                required
                placeholder="password"
                onChange={updatePassword}
              />
            </Col>
            <Col>
              <Button
                size="default"
                style={{ marginLeft: 5, marginRight: 5 }}
                id="loginbutton"
                type="button"
                value="login"
                onClick={handleLogin}
              >
                <b>login</b>
              </Button>
            </Col>
          </Row>
        </Input.Group>
      </form>
    </div>
  );
};

export default Login;
