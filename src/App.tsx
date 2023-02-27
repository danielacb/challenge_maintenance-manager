import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Avatar,
  Button,
  Divider,
  Layout,
  Menu,
  Space,
  theme,
  Typography,
} from "antd";
import { BankOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useClerk } from "@clerk/clerk-react";

import Logo from "/logo-tractian.svg";

const menuItems: MenuProps["items"] = [
  {
    key: `company`,
    label: `Company Name`,
    icon: <BankOutlined />,
    children: [
      {
        key: "/",
        label: <Link to={`/`}>Assets</Link>,
      },
      {
        key: "/units",
        label: <Link to={`/units`}>Units</Link>,
      },
      {
        key: "/users",
        label: <Link to={`/users`}>Users</Link>,
      },
      {
        type: "divider",
      },
    ],
  },
];

export default function App() {
  const { pathname } = useLocation();
  const { signOut } = useClerk();

  const { Header, Content, Sider } = Layout;
  const {
    token: { colorBgContainer, colorPrimary },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to={`/`} reloadDocument>
          <img src={Logo} alt="Logo Tractian" />
        </Link>
        <Space>
          <Space>
            <Avatar
              style={{ backgroundColor: colorPrimary }}
              icon={<UserOutlined />}
            />
            <Typography.Text style={{ color: colorBgContainer }}>
              User
            </Typography.Text>
          </Space>
          <Divider
            type="vertical"
            style={{ backgroundColor: colorBgContainer }}
          />
          <Button
            type="text"
            block
            icon={
              <LogoutOutlined
                style={{ color: colorBgContainer }}
                onClick={() => signOut()}
              />
            }
          />
        </Space>
      </Header>

      <Layout>
        <Sider
          width={240}
          collapsible
          theme="light"
          breakpoint="lg"
          style={{
            background: colorPrimary,
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["company", pathname]}
            defaultOpenKeys={["company"]}
            style={{ height: "100%", borderRight: 0 }}
            items={menuItems}
          />
        </Sider>

        <Layout style={{ padding: "0 24px 24px", marginTop: "16px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
