import React, { useState } from "react";
import axios from "axios";
import { Button } from 'antd';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    const creditentials = { username: username, password: password };
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.post("http://localhost:8080/login", creditentials).then((resp) => {
      const token = resp.data.token;
      localStorage.setItem("token", token);
      if (localStorage.getItem("token") !== "" && localStorage.getItem("token") !== undefined) {
        alert("logged in");        
      }// hibakezelés, ha resp status 403 csináljon valamit
      
    });
  };
  const updateUsername = (e) => setUsername(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  return (
    <div id="login">
      <form action="/login" method="post">
        <input
          id="username"
          type="text"
          required
          placeholder="username"
          onChange={updateUsername}
        />
        <input
          id="password"
          type="password"
          required
          placeholder="password"
          onChange={updatePassword}
        />
        <Button
          id="loginbutton"
          type="button"
          value="login"
          onClick={handleLogin}
        >login</Button>
      </form>
    </div>
  );
};

export default Login;
