import React from "react";
import { Card } from "antd";

const CartItem = (props) => {
  return (
    <div
      style={{
        width: 200,
        margin: 10,
        background: "white",
        marginLeft: "0",
      }}
    >
      <div style={{ margin: "5px" }}>
        <div>
          <b>{props.item.name}</b>
        </div>
        <div>Quantity: {props.item.quantity}</div>
        <div> Price/unit: {props.item.price} HUF</div>
      </div>
    </div>
  );
};

export default CartItem;
