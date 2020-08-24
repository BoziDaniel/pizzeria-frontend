import React, { createContext, useState, useEffect } from "react";

export const LoginContext = createContext();
export const LoginProvider = (props) => {
  const [LoggedInAsRole, setLoggedInAsRole] = useState(sessionStorage.getItem("role")===null?"":sessionStorage.getItem("role"));
  useEffect(() => {}, [LoggedInAsRole]);

  return (
    <LoginContext.Provider value={{ LoggedInAsRole, setLoggedInAsRole }}>
      {props.children}
    </LoginContext.Provider>
  );
};
export default LoginContext;
