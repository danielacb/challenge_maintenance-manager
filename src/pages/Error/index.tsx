import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Typography } from "antd";

import styles from "./styles.module.scss";

export default function ErrorPage() {
  const error = useRouteError();
  const { Title, Text } = Typography;

  if (isRouteErrorResponse(error)) {
    return (
      <div className={styles.ErrorPage}>
        <Title>Sorry, an unexpected error has occurred!</Title>
        <Title level={2}>
          {error.status} | {error.statusText}
        </Title>
        {error.data?.message && <Text>{error.data.message}</Text>}
      </div>
    );
  }

  return (
    <div className={styles.ErrorPage}>
      <Title style={{ margin: 0 }}>
        Sorry, an unexpected error has occurred!
      </Title>
    </div>
  );
}
