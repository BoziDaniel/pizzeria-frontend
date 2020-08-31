import React from "react";
import { Menu, Dropdown, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
const ManagerAssignCookDropdown = () => {
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd memu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Assign order to Cook <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
};

export default ManagerAssignCookDropdown;
