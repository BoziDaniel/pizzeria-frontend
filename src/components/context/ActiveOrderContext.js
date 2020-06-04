import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ActiveOrderContext = createContext();
export const ActiveOrderProvider = (props) => {
  const [ActiveOrders, setActiveOrders] = useState([]);

  useEffect(() => {
    console.log(localStorage.getItem("token"));
    axios.defaults.headers.get["Authorization"] = localStorage.getItem("token");
    axios.defaults.headers.get["Content-Type"] =
      "application/json;charset=utf-8";
    axios.get("http://localhost:8080/orders/active").then((res) => {
      console.log(res);
      setActiveOrders(res.data);
      //   console.log(res.data);
    });
  }, []);

  return (
    <ActiveOrderContext.Provider value={{ ActiveOrders, setActiveOrders }}>
      {props.children}
    </ActiveOrderContext.Provider>
  );
};
