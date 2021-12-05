import { Layout, Menu } from "antd";
import React, { useState } from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  QuestionCircleOutlined,
  ContainerOutlined,
  InfoCircleOutlined,
  LaptopOutlined,
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
        <div className="logo">HCG</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<QuestionCircleOutlined />}>
            <Link to="/">Tư vấn</Link>
          </Menu.Item>
          <Menu.SubMenu
            key="sub3"
            icon={<ContainerOutlined />}
            title="Cơ sở tri thức"
          >
            <Menu.Item key="9" icon={<LaptopOutlined />}>
              <Link to="/laptop">Laptop</Link>
            </Menu.Item>
            <Menu.Item key="10" icon={<ContainerOutlined />}>
              <Link to="/cauhinh">Cấu hình</Link>
            </Menu.Item>
            <Menu.Item key="11" icon={<ContainerOutlined />}>
              <Link to="/rule">Tập luật</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="3" icon={<InfoCircleOutlined />}>
            <Link to="/thongtin">Thông tin</Link>
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
