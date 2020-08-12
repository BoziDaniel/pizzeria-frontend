import React from "react";
import {Row, Col} from 'antd'

const SimplePizza = (props) => {
  const pizza = props.pizza;
  return <Row key={pizza.id}>
      <Col span={4}>pizza id: {pizza.id}</Col>
      <Col span={4}>name: {pizza.name}</Col>
      <Col span={4}>quantity: {pizza.quantity}</Col>
  </Row>;
};

export default SimplePizza;
