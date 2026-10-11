import React from "react";
import { Menu, type MenuProps } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
type MenuItemsProps = {
  items: MenuProps["items"];
  onClick: MenuProps["onClick"];
};


const MenuItems = ({ items, onClick }: MenuItemsProps) => {

  return (
    <div
      className="bg-white shadow-lg rounded-lg pt-10"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 300,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <span className="text-x p-3 fixed top-0 left-0 bg-white width-100 z-10 h-3">
        Список криптовалют
      </span>

      <Menu onClick={onClick} title="SADASDASD" className="desktop" mode="vertical" items={items} />
    </div>
  );
};

export default MenuItems;
