import React, { useState, useEffect } from "react";
import axios from "axios";
const useHttp = (url, method, token, dependencies) => {
  const [fetchedData, setFetchedData] = useState(null);
  const options = {
    url: url,
    method: method,
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  };
  useEffect(() => {
    
    axios(options).then((resp) => {
        setFetchedData(resp.data);
      });
      return () => {
          console.log("cleanup")
      }
  }, [dependencies, options])
  
  return [fetchedData, setFetchedData];
};

export default useHttp;
