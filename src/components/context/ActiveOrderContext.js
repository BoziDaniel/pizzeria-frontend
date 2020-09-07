import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { LoginContext } from "./LoginContext";

export const ActiveOrderContext = createContext();
export const ActiveOrderProvider = (props) => {
  const { LoggedInAsRole } = useContext(LoginContext);
  const [ActiveOrders, setActiveOrders] = useState([]);
  const [needsRefresh, setNeedsRefresh] = useState(false);
  useEffect(() => {
    console.log("getting active orders");
    if (needsRefresh === false) {
      return;
    }
    setNeedsRefresh(false);
    if (LoggedInAsRole !== "") {
      let token = sessionStorage.getItem("token");
      token = "Bearer " + token;
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
    } else {
      setActiveOrders([]);
    }
  }, [LoggedInAsRole, needsRefresh]);
  return (
    <ActiveOrderContext.Provider
      value={{ ActiveOrders, setActiveOrders, needsRefresh, setNeedsRefresh }}
    >
      {props.children}
    </ActiveOrderContext.Provider>
  );
};
