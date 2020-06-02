import React from "react";

const Pizza = (props) => {
  return (
    <div id={props.id}>
      <div>
        <img src={require("../../../images/hero.png")} alt="pizza"></img>
      </div>
      <div>
        <h2> {props.name} </h2>
        <h4>{props.description}</h4>
      </div>
      <div>{props.price}</div>
    </div>
  );
};

export default Pizza;
