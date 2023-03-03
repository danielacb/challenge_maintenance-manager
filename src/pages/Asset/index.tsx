import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { HomeOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Col,
  Empty,
  Image,
  Row,
  Skeleton,
  Space,
  Tooltip,
  Typography,
} from "antd";

import { getAssetById } from "../../api/fake-api";
import AssetStatus from "../../components/AssetStatus";
import HealthScoreBadge from "../../components/HealthScoreBadge";
import HealthHistoryData from "./HealthHistoryData";
import AssetDescriptions from "./AssetDescriptions";
import AssetStatistics from "./AssetStatistics";

export default function AssetPage() {
  const { id } = useParams();

  const { data, isLoading } = useQuery<AssetProps>({
    queryKey: ["getAssetById", id],
    queryFn: () => getAssetById(Number(id)),
  });

  if (isLoading) return <Skeleton paragraph={{ rows: 6 }} active={true} />;

  if (data)
    return (
      <>
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/">
            <span>Assets</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{data.name}</Breadcrumb.Item>
        </Breadcrumb>
        <Row style={{ marginTop: 16 }} gutter={[16, 16]}>
          <Col xs={{ span: 24 }} xl={{ span: 8 }}>
            <Space style={{ marginBottom: 16 }}>
              <Tooltip title="health score">
                <HealthScoreBadge score={data.healthscore} type="ribbon">
                  <Image
                    width="100%"
                    src={data?.image}
                    style={{ borderRadius: 8 }}
                  />
                </HealthScoreBadge>
              </Tooltip>
            </Space>
          </Col>
          <Col xs={{ span: 24 }} xl={{ span: 16 }}>
            <Space align="start">
              <Typography.Title>{data?.name}</Typography.Title>
              {data && <AssetStatus status={data.status} type="tag" />}
            </Space>
            <AssetStatistics data={data} />
            <AssetDescriptions data={data} />
          </Col>
        </Row>
        <Row style={{ marginTop: 32 }} gutter={[16, 16]}>
          <Col span={24}>
            <Typography.Title level={3}>Health History</Typography.Title>
            <HealthHistoryData
              name={data.name}
              healthHistory={data.healthHistory}
            />
          </Col>
        </Row>
      </>
    );

  return (
    <Space style={{ width: "100%", justifyContent: "center" }}>
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="No information found"
      />
    </Space>
  );
}
