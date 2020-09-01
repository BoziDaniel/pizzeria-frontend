import React, { useContext, useEffect } from "react";
import { Card } from "antd";
import CartContext from "../../context/CartContext";
import Cartitem from "./CartItem";
import ConfirmationModal from "./ConfirmationModal";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const { sumPrice } = useContext(CartContext);

  useEffect(() => {}, [cartItems]);

  return (
    <Card
      title="Cart"
      bordered={false}
      style={{
        marginTop: "53px",
        marginRight: "10px",
        background: " #d4b106 ",
        align: "center",
      }}
    >
      {cartItems.map((item) => (
        <Cartitem item={item} key={item.id} style={{}} />
      ))}
      <p style={{ marginTop: "5px" }}>
        <b>Sum: {sumPrice} HUF</b>
      </p>

      {cartItems.length !== 0 ? <ConfirmationModal /> : null}
    </Card>
  );
};

export default Cart;
