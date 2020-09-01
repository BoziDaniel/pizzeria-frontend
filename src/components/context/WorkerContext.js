import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { LoginContext } from "./LoginContext";

export const WorkerContext = createContext();
export const WorkerProvider = (props) => {
  const { LoggedInAsRole } = useContext(LoginContext);

  const [cooks, setCooks] = useState([]);
  const [deliveryGuys, setDeliveryGuys] = useState([]);
  useEffect(() => {
    if (LoggedInAsRole === "ROLE_MANAGER") {
      let token = sessionStorage.getItem("token");
      token = "Bearer " + token;
      const options = {
        url: "http://localhost:8080/cook/all",
        method: "GET",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      };
      axios(options).then((resp) => {
        setCooks(resp.data);
      });

      const options2 = {
        url: "http://localhost:8080/deliveryGuy/all",
        method: "GET",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      };
      axios(options2).then((res) => {
        setDeliveryGuys(res.data);
      });
    }
  }, [LoggedInAsRole]);

  return (
    <div>
      <WorkerContext.Provider
        value={{ cooks, setCooks, deliveryGuys, setDeliveryGuys }}
      >
        {props.children}
      </WorkerContext.Provider>
    </div>
  );
};

export default WorkerContext;
