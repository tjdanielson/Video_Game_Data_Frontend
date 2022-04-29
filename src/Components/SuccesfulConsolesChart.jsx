import React from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";

const SuccessfulConsolesChart = (props) => {
  const [chartData, setChartData] = useState([]);
  const [statsChartData, setStatsChartData] = useState([]);

  function generateDataForChart() {
    if (props.nameData.length > 0) {
      const data = [["Platform", "Sales\nPer Million"], ...props.nameData];
      return data;
    } else {
      const data = [["Platform", "Sales\nPer Million"], ...chartData];
      return data;
    }
  }

  useEffect(() => {
    props.getData();
    var result = Object.entries(props.data);
    setChartData(result);
  }, []);

  useEffect(() => {
    if (props.data) {
      var result = Object.entries(props.data);
      setChartData(result);
    }
  }, [props.data]);

  //<Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
  return (
    <div className="barChartContainer">
      <p>Platform By Global Sales - In Millions</p>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={generateDataForChart()}
      />
    </div>
  );
};
export default SuccessfulConsolesChart;
