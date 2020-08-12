import React from "react";
import SimplePizza from "./SimplePizza";
import { Row, Col, Card } from "antd";
const Order = (props) => {
  const order = props.order;

  return (
    <Card style={{ marginTop: "5px" }}>
      <Row id={order.id} >
        <Col span={8}>
          <Row>Order id: {order.id}</Row>
          <Row>Order Status: {order.orderStatus}</Row>
          <Row>Customer id: {order.customer.id}</Row>
        </Col>
        <Col span={14}>
          {" "}
          {order.incomingOrderedPizzas.map((pizza) => (
            <SimplePizza key={pizza.id} pizza={pizza} />
          ))}
        </Col>
      </Row>
    </Card>
  );
};

export default Order;
