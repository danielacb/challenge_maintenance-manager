import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import type { MenuProps } from "antd";

import Logo from "/logo-tractian.svg";

const menuItems: MenuProps["items"] = [
  {
    key: `company`,
    label: `Company Name`,
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
    ],
  },
];

export default function App() {
  const { pathname } = useLocation();

  const { Header, Content, Sider } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header>
        <Link to={`/`} reloadDocument>
          <img src={Logo} alt="Logo Tractian" />
        </Link>
      </Header>

      <Layout>
        <Sider width={240} style={{ background: colorBgContainer }}>
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
