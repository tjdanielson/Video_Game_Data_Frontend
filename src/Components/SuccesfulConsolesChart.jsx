import React from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";

const SuccessfulConsolesChart = (props) => {
  useEffect(() => {
    props.getData();
  }, []);

  console.log(props.data);

  const chartInfo = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
  ];
  //<Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
  return (
    <div>
      <p>Chart coming soon!!!!!!</p>
    </div>
  );
};
export default SuccessfulConsolesChart;
