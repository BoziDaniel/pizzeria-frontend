import React from "react";
import { Card, Row, Col, Button } from 'antd';


const Pizza = (props) => {
  return (
    
    <div className="site-card-border-less-wrapper">
    <Card title={props.name} bordered={true} style={{ width: "80%", margin: 20 }} headStyle={{textAlign: "left"}}>
    <Row >
      <Col span={8}><img src={require("../../../images/hero.png")} alt="pizza"></img></Col>
      <Col span={8}>
      <Row >
        {props.price}
      </Row>
      <Row >
        {props.description}
      </Row>
      </Col>
      <Col span={8}><Button type="primary">Add to cart</Button></Col>
    </Row>
    </Card>
  </div>
   
  

    /*  <div id={props.id}>
      <div>
        <img src={require("../../../images/hero.png")} alt="pizza"></img>
      </div>
      <div>
        <h2> {props.name} </h2>
        <h4>{props.description}</h4>
      </div>
      <div>{props.price}</div>
    </div> */

   
   
  );
};

export default Pizza;
