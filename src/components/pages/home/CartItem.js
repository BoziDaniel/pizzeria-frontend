import React, { useContext } from "react";
import { Button } from "antd";
import { CartContext } from "../../context/CartContext";
const CartItem = (props) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const handleDeleteItem = () => {
    let modifiedCartItems = [];
    for (let item of cartItems) {
      if (item.id !== props.item.id) {
        modifiedCartItems.push(item);
      }
    }
    setCartItems(modifiedCartItems);
  };
  const handleAddPizza = () => {
    let modifiedCartItems = [];
    for (let item of cartItems) {
      if (item.id === props.item.id) {
        item.quantity++;
      }
      modifiedCartItems.push(item);
    }
    setCartItems(modifiedCartItems);
  };

  const handleRemovePizza = () => {
    let modifiedCartItems = [];
    if (props.item.quantity === 1) {
      handleDeleteItem();
    } else {
      for (let item of cartItems) {
        if (item.id === props.item.id) {
          item.quantity--;
        }
        modifiedCartItems.push(item);
      }
      setCartItems(modifiedCartItems);
    }
  };

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
        <div>
          Quantity:{" "}
          <Button
            shape="circle"
            size="small"
            style={{ margin: 3, background: "#95de64" }}
            onClick={handleAddPizza}
          >
            <b>+</b>
          </Button>
          {props.item.quantity}
          <Button
            shape="circle"
            size="small"
            style={{ margin: 3, background: "#ffa39e" }}
            onClick={handleRemovePizza}
          >
            <b>-</b>
          </Button>
          <Button
            shape="circle"
            size="small"
            style={{ marginLeft: 20, background: "#ff7875" }}
            onClick={handleDeleteItem}
          >
            X
          </Button>
        </div>
        <div> Price/unit: {props.item.price} HUF</div>
      </div>
    </div>
  );
};

export default CartItem;
