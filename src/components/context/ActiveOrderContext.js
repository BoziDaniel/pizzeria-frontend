import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ActiveOrderContext = createContext();
export const ActiveOrderProvider = (props) => {
  const [ActiveOrders, setActiveOrders] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");

    const options = {
      url: "http://localhost:8080/orders/active",
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };
    axios(options).then((resp) => {
      console.log(resp);
      setActiveOrders(resp.data);
    });
  }, []);
  return (
    <ActiveOrderContext.Provider value={{ ActiveOrders, setActiveOrders }}>
      {props.children}
    </ActiveOrderContext.Provider>
  );
};


