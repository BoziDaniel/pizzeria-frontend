import React, { useContext, useEffect } from "react";
import { Card, Button } from "antd";
import CartContext from "../../context/CartContext";
import Cartitem from "./CartItem";
import axios from "axios";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { sumPrice } = useContext(CartContext);
  const convertToOrderDTO = (item) => {
    return { id: item.id, quantity: item.quantity };
  };
  const handleOrderPizzas = () => {
    let order = { incomingOrderedPizzas: [] };
    for (let item of cartItems) {
      order.incomingOrderedPizzas.push(convertToOrderDTO(item));
    }
    let token = sessionStorage.getItem("token");
    token = "Bearer " + token;
    const options = {
      url: "http://localhost:8080/orders/add-new",
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      data: order,
    };
    axios(options).then((resp) => {
      if (resp.status === 200) {
        alert("successful order");
        setCartItems([])
      } else {
        alert(resp.status + " error during order");
      }
    });
  };
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

      
      {cartItems.length !== 0 ? (
        <Button onClick={handleOrderPizzas} type="primary">
          Order
        </Button>
      ) : null}
    </Card>
  );
};

export default Cart;
