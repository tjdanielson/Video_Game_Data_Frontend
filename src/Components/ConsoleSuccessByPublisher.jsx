import React, { useState, useEffect } from "react";

const ConsoleSuccessByPublisher = (props) => {
  const [requestReload, setRequestReload] = useState(true);
  const [chartData, setChartData] = useState([]);

  function generateDataForChart() {
    let newData = chartData.map((data, i) => {
      console.log(data[i][1]);
      let publisherArray = Object.entries(data[i][1]);
      data.pop(data[1]);
      data.push(publisherArray);
    });
    console.log("converted object to array hopfully?: ", newData);
    return newData;
  }

  useEffect(() => {
    props.getData();
    var result = Object.entries(props.data);
    setChartData(result);
    console.log("success by publisher after conversion:", result);
  }, []);

  useEffect(() => {
    props.getData();
    var result = Object.entries(props.data);
    setChartData(result);
    console.log("success by publisher after conversion:", result);
    generateDataForChart();
  }, [props.data]);

  return (
    <div>
      <h3>Consoles</h3>
      {/* {props.result.map((data, i) => {
        <li>{data.platform}</li>;
      })} */}
    </div>
  );
};

export default ConsoleSuccessByPublisher;
