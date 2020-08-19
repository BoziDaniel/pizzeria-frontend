import React, { useContext } from "react";
import { Card, Row, Col, Button } from "antd";
import CartContext from "../../context/CartContext";

const Pizza = (props) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const handleAddToCart = () => {
    let found = false;
    for (let item of cartItems) {
      if (item.id === 500) {
        let dummy = {
          id: 500,
          name: "Songoku",
          quantity: item.quantity + 1,
          price: 3000,
        };
        item = dummy;
      
        found = true;
        let newerCartItems = [];
        for (let stuff of cartItems) {
          if (stuff.id === 500) {
            newerCartItems = [...newerCartItems, dummy];
          } else {
            newerCartItems = [...newerCartItems, stuff];
          }
        }
        setCartItems(newerCartItems);
      }
    }
    if (!found) {
      let dummy = {
        id: 500,
        name: "Songoku",
        quantity: 1,
        price: 3000,
      };
      let newCartItems = [...cartItems, dummy];

      setCartItems(newCartItems);
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
