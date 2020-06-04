import React from "react";

const Order = (props) => {
  const order = props.order;
  const pizzas = [];
  order.incomingOrderedPizzas.map((pizza) =>
    pizzas.push(JSON.stringify(pizza))
  );
  return (
    <tr key={order.id}>
      <td>{order.id}</td>
      <td>{order.orderStatus}</td>
      <td>{order.customer.id}</td>
      <td>{pizzas.toString()}</td>
    </tr>
  );
};

export default Order;
