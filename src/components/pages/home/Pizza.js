import React from "react";
import { Card, Row, Col, Button } from "antd";

const Pizza = (props) => {
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
            <Row style={{ textAlign: "left", marginTop:"5px" }}>{props.description}</Row>
          </Col>
          <Col span={4}>
            <Button type="primary">Add to cart</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Pizza;
