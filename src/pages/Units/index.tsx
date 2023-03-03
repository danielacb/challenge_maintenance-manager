import React from "react";
import {
  Card,
  Statistic,
  Col,
  Row,
  Typography,
  Space,
  Button,
  Tooltip,
  Empty,
} from "antd";
import { useQuery } from "@tanstack/react-query";
import { getUnitsByCompanyId } from "../../api/fake-api";
import { useUser } from "@clerk/clerk-react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export default function UnitsPage() {
  const { user } = useUser();
  const companyId = user?.publicMetadata.companyId;

  const { data, isLoading } = useQuery<UnitProps[]>({
    queryKey: ["getUnitdByCompanyId", companyId],
    queryFn: () => getUnitsByCompanyId(Number(companyId)),
  });

  if (isLoading)
    return (
      <>
        <Typography.Title>Units</Typography.Title>
        <Row gutter={[16, 16]}>
          {Array.from({ length: 4 }, (_, index) => (
            <Col
              key={index}
              xs={{ span: 24 }}
              md={{ span: 12 }}
              xl={{ span: 6 }}
            >
              <Card>
                <Statistic title="Unit #" value={0} loading />
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );

  return (
    <>
      <Space
        align="center"
        style={{
          marginBottom: 16,
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography.Title style={{ marginBottom: 0 }}>Units</Typography.Title>
        <Button type="primary" size="large" loading={isLoading}>
          Add new unit
        </Button>
      </Space>
      <Row gutter={[16, 16]}>
        {data && data.length > 0 ? (
          data?.map((unit) => (
            <Col
              key={unit.id}
              xs={{ span: 24 }}
              md={{ span: 12 }}
              xl={{ span: 6 }}
            >
              <Card
                actions={[
                  <Button key="edit" type="text">
                    <Tooltip title="Edit unit">
                      <EditOutlined />
                    </Tooltip>
                  </Button>,
                  <Button key="delete" type="text">
                    <Tooltip title="Delete unit">
                      <DeleteOutlined />
                    </Tooltip>
                  </Button>,
                ]}
              >
                <Statistic title={`Unit #${unit.id}`} value={unit.name} />
              </Card>
            </Col>
          ))
        ) : (
          <Space style={{ width: "100%", justifyContent: "center" }}>
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="No units found"
            />
          </Space>
        )}
      </Row>
    </>
  );
}
