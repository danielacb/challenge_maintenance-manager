import React from "react";
import { Avatar, Col, Descriptions, Row } from "antd";
import UserAvatar from "../../components/UserAvatar";

type Props = {
  data: AssetProps;
};

export default function AssetDescriptions({ data }: Props) {
  function getSensorsList(sensors: string[]) {
    if (sensors.length === 1) return sensors;

    const firsts = sensors.slice(0, sensors.length - 1);
    const last = sensors[sensors.length - 1];
    return firsts.join(", ") + " and " + last;
  }

  return (
    <Row style={{ marginTop: 32 }} gutter={[16, 16]}>
      <Col>
        <Descriptions bordered layout="vertical">
          <Descriptions.Item label="Model">{data?.model}</Descriptions.Item>
          <Descriptions.Item label="Assigned Users">
            <Avatar.Group>
              {data?.assignedUserIds.map((userId) => (
                <UserAvatar key={userId} id={userId} size="small" />
              ))}
            </Avatar.Group>
          </Descriptions.Item>
          {data?.specifications.maxTemp && (
            <Descriptions.Item label="Maximum temperature">
              {data?.specifications.maxTemp}º C
            </Descriptions.Item>
          )}
          {data?.specifications.power && (
            <Descriptions.Item label="Power">
              {data?.specifications.power} kWh
            </Descriptions.Item>
          )}
          {data?.specifications.rpm && (
            <Descriptions.Item label="RPM">
              {data?.specifications.power} RPM
            </Descriptions.Item>
          )}
          {data?.sensors && (
            <Descriptions.Item label="Sensors">
              {getSensorsList(data.sensors)}
            </Descriptions.Item>
          )}
        </Descriptions>
      </Col>
    </Row>
  );
}
