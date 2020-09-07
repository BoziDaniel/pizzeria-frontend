import React, { useContext } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { WorkerContext } from "../../../context/WorkerContext";
import { ActiveOrderContext } from "../../../context/ActiveOrderContext";
import axios from 'axios';

const ManagerAssignCookDropdown = (props) => {
  const { setNeedsRefresh } = useContext(ActiveOrderContext);
  const { cooks } = useContext(WorkerContext);
  const onClick = ({ key }) => {
    let token = sessionStorage.getItem("token");
    token = "Bearer " + token;
    const options = {
      url: "http://localhost:8080/orders/assignCook/"+props.orderId,
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      data: key,
    };
    axios(options).then((resp) => {
      if (resp.status === 200) {
        setNeedsRefresh(true);

        alert("succesfulli assigned cook")
      } else {
        alert(resp.status + " error during assigning cook");
      }
    });

  };
  const menu = (
    <Menu onClick={onClick}>
      { cooks.map((cook)=>(
        <Menu.Item key={cook.id}>{cook.username}</Menu.Item>
      )) }
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu}>
        <p className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Assign order to Cook <DownOutlined />
        </p>
      </Dropdown>
    </div>
  );
};

export default ManagerAssignCookDropdown;
