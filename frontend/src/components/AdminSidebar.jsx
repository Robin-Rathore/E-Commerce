import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  UserOutlined,
  MailOutlined,
  MenuFoldOutlined,
  ShoppingCartOutlined,
  MenuUnfoldOutlined,
  ClockCircleOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { Layout } from "antd";
import "../styles/adminSidebar.css";
import {useNavigate}from 'react-router-dom'
const { Header, Sider } = Layout;

const items = [
  {
    key: "/users",
    icon: <UserOutlined />,
    label: "Users",
  },
  {
    key: "/orders",
    icon: <ShoppingCartOutlined />,
    label: "Orders",
  },
  {
    key: "/addProducts",
    icon: <MenuFoldOutlined />,
    label: "Add Products",
  },
  
];

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate()
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  
  return (
    <>
      <div className="antdsidebar" style={{display:"flex" }}>
        {/* <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button> */}
        <Menu
        onClick={({key})=>{
            navigate(key)
        }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>
    </>
  );
};

export default AdminSidebar;
