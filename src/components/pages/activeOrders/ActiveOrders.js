import React, { useContext, useEffect } from "react";
import { ActiveOrderContext } from "../../context/ActiveOrderContext";
import Order from "./Order";
const ActiveOrders = () => {
  const { ActiveOrders } = useContext(ActiveOrderContext);
  useEffect(() => {}, [ActiveOrders]);
  return (
    <div>
      <div>
        {ActiveOrders.map((order) => (
            <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default ActiveOrders;
