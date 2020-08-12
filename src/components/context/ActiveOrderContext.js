import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import {LoginContext} from "./LoginContext"

export const ActiveOrderContext = createContext();
export const ActiveOrderProvider = (props) => {
  const { LoggedInAsRole } = useContext(LoginContext);
  const [ActiveOrders, setActiveOrders] = useState([]);
  useEffect(() => {
    let token = localStorage.getItem("token");
    token="Bearer " + token;
    const options = {
      url: "http://localhost:8080/orders/active",
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };
    axios(options).then((resp) => {
      setActiveOrders(resp.data);
    });
  }, [LoggedInAsRole]);
  return (
    <ActiveOrderContext.Provider value={{ ActiveOrders, setActiveOrders }}>
      {props.children}
    </ActiveOrderContext.Provider>
  );
};


