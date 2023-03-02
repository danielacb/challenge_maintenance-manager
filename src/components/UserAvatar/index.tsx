import React from "react";
import { useQuery } from "@tanstack/react-query";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, AvatarProps, theme, Tooltip, TooltipProps } from "antd";

import { getUserById } from "../../api/fake-api";

type Props = {
  id: number;
  tooltipProps?: TooltipProps;
} & AvatarProps;

export default function UserAvatar({ id, tooltipProps, ...props }: Props) {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const { data, isLoading } = useQuery<UserProps>({
    queryKey: ["getUserById", id],
    queryFn: () => getUserById(id),
  });

  return (
    <Tooltip title={data?.name || ""} {...tooltipProps}>
      <Avatar
        icon={isLoading ? <UserOutlined /> : ""}
        style={{ backgroundColor: colorPrimary }}
        {...props}
      >
        {data?.name[0]}
      </Avatar>
    </Tooltip>
  );
}
