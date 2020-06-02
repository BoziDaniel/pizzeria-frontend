import React from "react";

const Login = () => {
  return (
    <div id="login">
      <form action="/login" METHOD="post">
        <input id="username" type="text" required placeholder="username" />
        <input id="password" type="password" required placeholder="password" />
        <input id="loginbutton" type="button" value="login" />
      </form>
    </div>
  );
};

export default Login;
