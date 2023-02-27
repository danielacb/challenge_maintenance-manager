import React from "react";
import { Link } from "react-router-dom";
import { BankOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

export const menuItems: MenuProps["items"] = [
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
