import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";
import { Avatar, Button, Space, Table, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";

import { getAssetsByCompanyId, getUnits } from "../../api/fake-api";
import UserAvatar from "../../components/UserAvatar";
import AssetStatus from "../../components/AssetStatus";
import HealthScoreBadge from "../../components/HealthScoreBadge";
import { formatDate, getUnitName } from "../../utils";

export default function AssetsPage() {
  const { user } = useUser();
  const companyId = user?.publicMetadata.companyId;

  const { data: assets, isLoading } = useQuery<AssetProps[]>({
    queryKey: ["getAssetsByCompanyId", companyId],
    queryFn: () => getAssetsByCompanyId(Number(companyId)),
  });

  const { data: units } = useQuery<UnitProps[]>({
    queryKey: ["getUnits"],
    queryFn: getUnits,
  });

  interface DataType {
    key: React.Key;
    status: React.ReactNode;
    healthscore: React.ReactNode;
    lastUptimeAt: string;
    totalUptime: number;
    totalCollectsUptime: number;
    units: string;
    name: React.ReactNode;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "status",
      dataIndex: "status",
      title: "Status",
    },
    {
      key: "healthscore",
      dataIndex: "healthscore",
      title: "Health Score",
    },
    {
      key: "lastUptimeAt",
      dataIndex: "lastUptimeAt",
      title: "Last Uptime At",
      align: "right",
    },
    {
      key: "totalUptime",
      dataIndex: "totalUptime",
      title: "Total Uptime (hours)",
      align: "right",
    },
    {
      key: "totalCollectsUptime",
      dataIndex: "totalCollectsUptime",
      title: "Total Collects Uptime",
      align: "right",
    },
    {
      key: "units",
      dataIndex: "units",
      title: "Unit",
      align: "right",
    },
    {
      dataIndex: "users",
      title: "Assigned Users",
      align: "right",
    },
  ];

  const data: DataType[] =
    assets?.map((asset) => ({
      key: asset.id,
      name: <Link to={`/assets/${asset.id}`}>{asset.name}</Link>,
      users: (
        <Avatar.Group>
          {asset.assignedUserIds.map((userId) => (
            <UserAvatar key={userId} id={userId} size="small" />
          ))}
        </Avatar.Group>
      ),
      status: <AssetStatus status={asset.status} type="badge" />,
      healthscore: <HealthScoreBadge score={asset.healthscore} />,
      lastUptimeAt: formatDate(new Date(asset.metrics.lastUptimeAt)),
      totalUptime: parseInt(String(asset.metrics.totalUptime)),
      totalCollectsUptime: asset.metrics.totalCollectsUptime,
      units: getUnitName(asset.unitId, units),
    })) || [];

  return (
    <>
      <Space
        align="center"
        style={{
          marginBottom: 32,
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography.Title style={{ marginBottom: 0 }}>Assets</Typography.Title>
        <Button type="primary" size="large" loading={isLoading}>
          Add new asset
        </Button>
      </Space>
      <Table
        columns={columns}
        scroll={{ x: 1200 }}
        dataSource={data}
        loading={isLoading}
      />
    </>
  );
}
