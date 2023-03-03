import React from "react";
import { Card, Col, Row, Statistic } from "antd";
import { formatDate } from "../../utils";

type Props = {
  data: AssetProps;
};

export default function AssetStatistics({ data }: Props) {
  return (
    <Card>
      <Row>
        <Col span={6}>
          <Statistic title="Health Score" value={data.healthscore} suffix="%" />
        </Col>
        <Col span={6}>
          <Statistic
            title="Last Uptime At"
            value={formatDate(new Date(data.metrics.lastUptimeAt))}
          />
        </Col>
        <Col span={6}>
          <Statistic
            title="Total Uptime"
            value={`${parseInt(String(data.metrics.totalUptime))} hours`}
          />
        </Col>
        <Col span={6}>
          <Statistic
            title="Total Collects Uptime"
            value={data.metrics.totalCollectsUptime}
          />
        </Col>
      </Row>
    </Card>
  );
}
