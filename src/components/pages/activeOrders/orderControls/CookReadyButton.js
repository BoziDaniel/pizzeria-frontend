import React, { useContext } from "react";
import { Button } from "antd";
import axios from "axios";
import { ActiveOrderContext } from "../../../context/ActiveOrderContext";

const CookReadyButton = (props) => {
  const { setNeedsRefresh } = useContext(ActiveOrderContext);

  const handlePizzaIsReady = () => {
    let token = sessionStorage.getItem("token");
    token = "Bearer " + token;
    const options = {
      url: "http://localhost:8080/orders/set-order-ready/" + props.id,
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };
    axios(options).then((resp) => {
      console.log(resp);
      setNeedsRefresh(true);
    });
  };
  return (
    <Button onClick={handlePizzaIsReady} type="primary">
      <b>Ready</b>
    </Button>
  );
};

export default CookReadyButton;
