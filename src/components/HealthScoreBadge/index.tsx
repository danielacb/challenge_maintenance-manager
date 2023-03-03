import React from "react";
import { Badge } from "antd";
import { red, orange, green } from "@ant-design/colors";

type Props = {
  score: number;
  type?: "badge" | "ribbon" | "text";
  children?: React.ReactNode;
};

export default function HealthScoreBadge({ score, type, children }: Props) {
  function getColor() {
    if (score < 25) return red[8];
    if (score < 50) return red[5];
    if (score < 75) return orange[4];
    if (score >= 75) return green[5];
  }

  if (type === "ribbon") {
    return (
      <Badge.Ribbon placement="start" text={`${score}%`} color={getColor()}>
        {children}
      </Badge.Ribbon>
    );
  }

  return <Badge count={`${score}%`} color={getColor()} />;
}
