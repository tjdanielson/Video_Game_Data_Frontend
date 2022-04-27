import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

export const chartInfo = [
  ["Platform", "Sales", { role: "style" }],
  ["Copper", 8.94, "green"],
  ["Silver", 10.49, "green"],
  ["Gold", 19.3, "green"],
  ["Platinum", 21.45, "green"],
];

const SuccessfulConsolesChart = (barChartData) => {
  let data = barChartData.data.map((i) => {
    i.push("green");
  });
  console.log(data);

  return (
    <div>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={chartInfo}
      />
    </div>
  );
};
export default SuccessfulConsolesChart;
