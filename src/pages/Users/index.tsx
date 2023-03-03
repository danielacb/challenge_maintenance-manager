import React from "react";
import {
  Card,
  Col,
  Row,
  Typography,
  Space,
  Button,
  Tooltip,
  Empty,
  Descriptions,
  Skeleton,
} from "antd";
import { useQuery } from "@tanstack/react-query";
import { getUnits, getUsersByCompanyId } from "../../api/fake-api";
import { useUser } from "@clerk/clerk-react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import UserAvatar from "../../components/UserAvatar";
import { getUnitName } from "../../utils";

export default function UsersPage() {
  const { user } = useUser();
  const companyId = user?.publicMetadata.companyId;

  const { data, isLoading } = useQuery<UserProps[]>({
    queryKey: ["getUsersByCompanyId", companyId],
    queryFn: () => getUsersByCompanyId(Number(companyId)),
  });

  const { data: units } = useQuery<UnitProps[]>({
    queryKey: ["getUnits"],
    queryFn: getUnits,
  });

  if (isLoading)
    return (
      <>
        <Typography.Title>Users</Typography.Title>
        <Row gutter={16}>
          {Array.from({ length: 4 }, (_, index) => (
            <Col key={index} span={6}>
              <Card
                actions={[
                  <Skeleton.Button key="1" />,
                  <Skeleton.Button key="2" />,
                ]}
              >
                <Skeleton avatar paragraph={{ rows: 2 }} />
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
        <Typography.Title style={{ marginBottom: 0 }}>Users</Typography.Title>
        <Button type="primary" size="large" loading={isLoading}>
          Add new user
        </Button>
      </Space>
      <Row gutter={[16, 16]}>
        {data && data.length > 0 ? (
          data?.map((user) => (
            <Col key={user.id} span={6}>
              <Card
                actions={[
                  <Button key="edit" type="text">
                    <Tooltip title="Edit user">
                      <EditOutlined />
                    </Tooltip>
                  </Button>,
                  <Button key="delete" type="text">
                    <Tooltip title="Delete user">
                      <DeleteOutlined />
                    </Tooltip>
                  </Button>,
                ]}
              >
                <Space size="middle" align="start">
                  <UserAvatar id={user.id} size="large" />
                  <Space direction="vertical" size={0}>
                    <Typography.Title level={4} style={{ margin: 0 }}>
                      {user.name}
                    </Typography.Title>
                    <Typography.Text style={{ margin: 0 }}>
                      {user.email}
                    </Typography.Text>
                    <Descriptions>
                      <Descriptions.Item
                        label="Unit"
                        style={{ paddingBottom: 0 }}
                      >
                        {getUnitName(user.unitId, units)}
                      </Descriptions.Item>
                    </Descriptions>
                  </Space>
                </Space>
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
