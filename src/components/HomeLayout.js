import { Layout, Menu } from "antd";
import React, { useState } from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

export default function HomeLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">WATCH</div>
        <Menu
          theme="primary"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ margin: "5px 5px" }}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<BarsOutlined />}>
            <Link to="/category">Quản lý Danh mục</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<BarsOutlined />}>
            <Link to="/products">Quản lý sản phẩm</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<BarsOutlined />}>
            <Link to="/saleOrder">Quản lý Đơn hàng</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<BarsOutlined />}>
            <Link to="/accout">Quản lý tài khoản</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
