import React from "react";
import { Row, Col } from "antd";

const SimplePizza = (props) => {
  const pizza = props.pizza;
  return (
    <Row key={pizza.id}>
      <Col span={4}>{pizza.id}</Col>
      <Col span={6}>{pizza.name}</Col>
      <Col span={4}>{pizza.quantity}</Col>
    </Row>
  );
};

export default SimplePizza;
