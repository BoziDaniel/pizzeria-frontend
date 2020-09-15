import React, { useContext } from "react";
import SimplePizza from "./SimplePizza";
import { Row, Col, Card, Progress } from "antd";
import { LoginContext } from "../../context/LoginContext";
import CookReadyButton from "./orderControls/CookReadyButton";
import PizzaIsDeliveredButton from "./orderControls/PizzaIsDeliveredButton";
import ManagerAssignCookDropdown from "./orderControls/ManagerAssignCookDropdown";
import ManagerAssignDeliveryDropdown from "./orderControls/ManagerAssignDeliveryDropdown";
import Address from "../activeOrders/Address";
const Order = (props) => {
  const { LoggedInAsRole } = useContext(LoginContext);
  const order = props.order;
  const calculateProgress = (status) => {
    switch (status) {
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
  };

  return (
    <Card style={{ marginTop: "5px" }}>
      <Row id={order.id}>
        <Col span={5}>
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
          {LoggedInAsRole === "ROLE_MANAGER" ? (
            <div>
              <Row>
                <span style={{ fontWeight: "bold", paddingRight: "4px" }}>
                  Assigned Cook:{" "}
                </span>
                {order.cook !== null ? (
                  order.cook.username
                ) : LoggedInAsRole === "ROLE_MANAGER" &&
                  order.orderStatus === "ORDERED" ? (
                  <ManagerAssignCookDropdown
                    cooks={props.cooks}
                    orderId={order.id}
                  />
                ) : null}
              </Row>
              <Row>
                <span style={{ fontWeight: "bold", paddingRight: "4px" }}>
                  Assigned DeliveryGuy:{" "}
                </span>
                {order.deliveryGuy !== null ? (
                  order.deliveryGuy.username
                ) : LoggedInAsRole === "ROLE_MANAGER" &&
                  order.orderStatus === "READY" ? (
                  <ManagerAssignDeliveryDropdown
                    deliveryGuys={props.deliveryGuys}
                    orderId={order.id}
                  />
                ) : null}
              </Row>
            </div>
          ) : null}

          <Row>
            <span style={{ fontWeight: "bold", paddingRight: "4px" }}>
              Order Status:{" "}
            </span>
            {order.orderStatus}
          </Row>
        </Col>
        <Col span={3}>
          <Progress
            type="circle"
            percent={calculateProgress(order.orderStatus)}
            width={80}
          />{" "}
        </Col>
        <Col span={8}>
          <Row style={{ fontWeight: "bold" }}>
            <Col span={4}>Pizza id</Col>
            <Col span={6}>Name</Col>
            <Col span={4}>Quantity</Col>
          </Row>
          {order.incomingOrderedPizzas.map((pizza) => (
            <SimplePizza key={pizza.id} pizza={pizza} />
          ))}
        </Col>
        {LoggedInAsRole === "ROLE_DELIVERYGUY" ||
        LoggedInAsRole === "ROLE_MANAGER" ? (
          <Col span={4}>
            <Address address={order.address} />
          </Col>
        ) : null}
        <Col span={1}>
          {LoggedInAsRole === "ROLE_COOK" ? (
            <CookReadyButton id={order.id} />
          ) : null}
          {LoggedInAsRole === "ROLE_DELIVERYGUY" ? (
            <PizzaIsDeliveredButton id={order.id} />
          ) : null}
      
        </Col>
      </Row>
    </Card>
  );
};

export default Order;
