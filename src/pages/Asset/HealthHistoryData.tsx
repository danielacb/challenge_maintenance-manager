import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsAccessibility from "highcharts/modules/accessibility";
import xrange from "highcharts/modules/xrange";
import { blue, red, gold } from "@ant-design/colors";

xrange(Highcharts);
highchartsAccessibility(Highcharts);

type Props = {
  name: string;
  healthHistory: HealthHistoryProps[];
};

export default function HealthHistoryData({ name, healthHistory }: Props) {
  const categories: AssetStatusProps[] = [
    "inAlert",
    "inOperation",
    "inDowntime",
    "plannedStop",
    "unplannedStop",
  ];

  const formattedData = healthHistory.map((item, index) => {
    const x = new Date(item.timestamp).getTime();
    const y = categories.indexOf(item.status);

    if (index === healthHistory.length - 1) {
      return {
        x,
        x2: new Date().getTime(),
        y,
      };
    } else {
      return {
        x,
        x2: new Date(healthHistory[index + 1].timestamp).getTime(),
        y,
      };
    }
  });

  const config = {
    chart: {
      type: "xrange",
    },
    title: {
      text: "",
    },
    xAxis: {
      type: "datetime",
    },
    yAxis: {
      title: {
        text: "",
      },
      categories: [
        "in Alert",
        "in Operation",
        "In Downtime",
        "Planned Stop",
        "Unplanned Stop",
      ],
    },
    series: [
      {
        name,
        pointWidth: 20,
        data: formattedData,
        dataLabels: {
          enabled: true,
        },
        borderRadius: 0,
        colors: [red[4], blue[5], gold[5], gold[5], red[4]],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={config} />;
}
