import React, { useContext } from "react";
import { Card, Row, Col, Button } from "antd";
import CartContext from "../../context/CartContext";

const Pizza = (props) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const handleAddToCart = () => {
    let found = false;
    let newCartItems = [];
    for (let index = 0; index < cartItems.length; index++) {
      if (cartItems[index].id === props.id) {
        let pizzaWithIncreasedAmount = {
          id: props.id,
          name: props.name,
          description: props.description,
          quantity: cartItems[index].quantity + 1,
          price: props.price,
        };
        newCartItems = [...newCartItems, pizzaWithIncreasedAmount];
        found = true;
      } else {
        newCartItems.push(cartItems[index]);
      }
    }
    setCartItems(newCartItems);
    if (!found) {
      console.log("not found");
      let newCartItem = {
        id: props.id,
        name: props.name,
        description: props.description,
        quantity: 1,
        price: props.price,
      };
      setCartItems([...cartItems, newCartItem]);
    }
  };
  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title={props.name}
        bordered={true}
        style={{ width: "95%", margin: 10 }}
        headStyle={{ textAlign: "left" }}
      >
        <Row>
          <Col span={8}>
            <img src={require("../../../images/hero.png")} alt="pizza"></img>
          </Col>
          <Col span={10}>
            <Row>
              <b>Price: {props.price} HUF</b>
            </Row>
            <Row style={{ textAlign: "left", marginTop: "5px" }}>
              {props.description}
            </Row>
          </Col>
          <Col span={4}>
            <Button type="primary" onClick={handleAddToCart}>
              Add to cart
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Pizza;
