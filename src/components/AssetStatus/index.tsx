import React from "react";
import { Badge, Tag } from "antd";
import type { PresetStatusColorType } from "antd/es/_util/colors";

type Props = {
  status: AssetStatusProps;
  type: "tag" | "badge";
};

export default function AssetStatus({ status, type }: Props) {
  function getColor(): PresetStatusColorType {
    if (status === "inAlert" || status === "unplannedStop") return "error";
    if (status === "inDowntime" || status === "plannedStop") return "warning";
    if (status === "inOperation") return "processing";
    return "default";
  }
  const color = getColor();

  const texts = {
    inAlert: "In Alert",
    inOperation: "In Operation",
    inDowntime: "In Downtime",
    unplannedStop: "Unplanned Stop",
    plannedStop: "Planned Stop",
  };
  const text = texts[status];

  if (type === "badge") return <Badge status={color} text={text} />;
  return <Tag color={color}>{text}</Tag>;
}
