import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Divider,
  Layout,
  Menu,
  Space,
  theme,
  Tooltip,
  Typography,
} from "antd";

import { menuItems } from "./menuItems";
import Logo from "/logo-tractian.svg";

type Props = {
  children: React.ReactNode;
};

export default function Navigation({ children }: Props) {
  const { pathname } = useLocation();
  const { signOut } = useClerk();

  const { Header, Content, Sider } = Layout;
  const {
    token: { colorBgContainer, colorPrimary },
  } = theme.useToken();

  const { user } = useUser();
  const username = user?.publicMetadata.name || "";

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
              <>{username}</>
            </Typography.Text>
          </Space>
          <Divider
            type="vertical"
            style={{ backgroundColor: colorBgContainer }}
          />
          <Tooltip title="Sign out">
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
          </Tooltip>
        </Space>
      </Header>

      <Layout>
        <Sider
          width={240}
          collapsible
          theme="light"
          breakpoint="lg"
          style={{
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
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
