import { useState, useEffect } from "react";
import axios from "axios";
const useHttp = (url, method, dependencies) => {
  const [fetchedData, setFetchedData] = useState(null);
  let token = sessionStorage.getItem("token");
  token = "Bearer " + token;
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
  
  }, [dependencies, options]);

  return [fetchedData];
};

export default useHttp;
