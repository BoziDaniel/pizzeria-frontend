import React, { useContext, useEffect } from "react";
import { ActiveOrderContext } from "../../context/ActiveOrderContext";
import Order from "./Order";
const ActiveOrders = () => {
  const { ActiveOrders } = useContext(ActiveOrderContext);
  useEffect(() => {}, [ActiveOrders]);
  console.log(ActiveOrders);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Customer id</th>
            <th>Ordered Pizzas</th>
          </tr>
        </thead>
        <tbody>
          {ActiveOrders.map((order) => (
            <Order key={order.id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveOrders;
