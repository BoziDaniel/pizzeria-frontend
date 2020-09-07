import React, { useContext } from "react";
import { Button } from "antd";
import { ActiveOrderContext } from "../../../context/ActiveOrderContext";

import axios from "axios";
const PizzaIsDeliveredButton = (props) => {
  const { setNeedsRefresh } = useContext(ActiveOrderContext);
  const handlePizzaIsDelivered = () => {
    let token = sessionStorage.getItem("token");
    token = "Bearer " + token;
    const options = {
      url: "http://localhost:8080/orders/set-order-delivered/" + props.id,
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
    <Button onClick={handlePizzaIsDelivered} type="primary">
      <b>Ready</b>
    </Button>
  );
};

export default PizzaIsDeliveredButton;
