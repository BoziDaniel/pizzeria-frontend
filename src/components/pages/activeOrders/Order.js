import React from "react";
import SimplePizza from "./SimplePizza";
import { Row, Col, Card, Progress } from "antd";
const Order = (props) => {
  const order = props.order;
  const calculateProgress = (status)=>{
    switch(status){
      case "ORDERED":
        return 20;
      case "IN_PROGRESS":
        return 40;
      case "READY":
        return 60;
      case "IN_DELIVERY":
        return 80;
      case "DELIVERED":
        return 100;
      default:
        console.log("bad status");
        return 0;
    }
  } 
    
  
  return (
    <Card style={{ marginTop: "5px" }}>
      <Row id={order.id}>
        <Col span={3}>
          <Row>
            <span style={{ fontWeight: "bold", paddingRight: "4px" }}>
              Order id:
            </span>
            {order.id}
          </Row>
          <Row>
            <span style={{ fontWeight: "bold", paddingRight: "4px" }}>
              Customer id:{" "}
            </span>
            {order.customer.id}
          </Row>
          <Row>
            <span style={{ fontWeight: "bold", paddingRight: "4px" }}>
              Order Status:{" "}
            </span>
            {order.orderStatus}
          </Row>
        </Col>
        <Col span={4}>
          <Progress type="circle" percent={calculateProgress(order.orderStatus)} width={80} />{" "}
        </Col>
        <Col span={12}>
          <Row style={{ fontWeight: "bold" }}>
            <Col span={4}>Pizza id</Col>
            <Col span={4}>Name</Col>
            <Col span={4}>Quantity</Col>
          </Row>
          {order.incomingOrderedPizzas.map((pizza) => (
            <SimplePizza key={pizza.id} pizza={pizza} />
          ))}
        </Col>
      </Row>
    </Card>
  );
};

export default Order;
