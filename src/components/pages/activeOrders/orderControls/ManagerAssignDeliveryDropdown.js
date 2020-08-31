import React, { useContext } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { WorkerContext } from "../../../context/WorkerContext";
import axios from "axios";

const ManagerAssignDeliveryDropdown = (props) => {
  const { deliveryGuys } = useContext(WorkerContext);
  const onClick = ({ key }) => {
    let token = sessionStorage.getItem("token");
    token = "Bearer " + token;
    const options = {
      url: "http://localhost:8080/orders/assignDeliveryGuy/" + props.orderId,
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      data: key,
    };
    axios(options).then((resp) => {
      if (resp.status === 200) {
        alert("succesfulli assigned deliveryguy");
      } else {
        alert(resp.status + " error during assigning cook");
      }
    });
  };
  const menu = (
    <Menu onClick={onClick}>
      {deliveryGuys.map((deliveryGuy) => (
        <Menu.Item key={deliveryGuy.id}>{deliveryGuy.username}</Menu.Item>
      ))}
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu}>
        <p className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Assign order to DeliveryGuy <DownOutlined />
        </p>
      </Dropdown>
    </div>
  );
};

export default ManagerAssignDeliveryDropdown;
