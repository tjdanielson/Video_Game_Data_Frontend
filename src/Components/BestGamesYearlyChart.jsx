import React from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";
import "./styles.css";

const BestGamesYearlyChart = (props) => {
  const [chartData, setChartData] = useState([]);

  function generateDataForChart() {
    const data = [["Year", "Game"], ...chartData];
    return data;
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
    <div className="bestGamesWrapper">
      <div>
        <h3>Best Games Yearly</h3>
      </div>
      <div>
        <Chart chartType="Table" data={generateDataForChart()} />
      </div>
    </div>
  );
};
export default BestGamesYearlyChart;
