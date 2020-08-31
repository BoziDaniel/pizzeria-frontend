import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { LoginContext } from "./LoginContext";

export const WorkerContext = createContext();
export const WorkerProvider = (props) => {
  const { LoggedInAsRole } = useContext(LoginContext);

  const [cooks, setCooks] = useState([]);
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
    }
  }, [LoggedInAsRole]);

  return (
    <div>
      <WorkerContext.Provider value={{ cooks, setCooks }}>
        {props.children}
      </WorkerContext.Provider>
    </div>
  );
};

export default WorkerContext;
