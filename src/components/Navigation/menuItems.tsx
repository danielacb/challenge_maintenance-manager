import React from "react";
import { Link } from "react-router-dom";
import { BankOutlined } from "@ant-design/icons";
import { MenuProps, Skeleton } from "antd";

export function getMenuItems(
  companyName: string,
  isLoading: boolean
): MenuProps["items"] {
  return [
    {
      key: `company`,
      label: isLoading ? (
        <Skeleton
          paragraph={{ rows: 0 }}
          active={true}
          style={{ marginTop: 24 }}
        />
      ) : (
        companyName
      ),
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
}
