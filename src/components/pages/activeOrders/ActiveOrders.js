import React, { useContext, useEffect } from "react";
import { ActiveOrderContext } from "../../context/ActiveOrderContext";
import Order from "./Order";
import WorkerContext from "../../context/WorkerContext";

const ActiveOrders = () => {
  const { ActiveOrders } = useContext(ActiveOrderContext);
  const { cooks } = useContext(WorkerContext);
  useEffect(() => {
    console.log(cooks);
  }, [ActiveOrders, cooks]);

  return (
    <div>
      {ActiveOrders.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
};

export default ActiveOrders;
