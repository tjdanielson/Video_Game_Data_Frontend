import React, { useState, useEffect } from "react";

let i = 0;

const ConsoleSuccessByPublisher = (props) => {
  const [getData, setGetData] = useState([]);
  const [chartData, setChartData] = useState([]);

  function generateDataForChart() {
    let rawData = Object.entries(props.data);
    console.log("before map runs in generateDataForChart:" + getData);
    let newData = rawData.map((data, i) => {
      let publisherArray = Object.entries(data[1]);
      return [data[0], publisherArray];
    });
    console.log("After Map runs in generateDataForChart: ", newData);

    setChartData(newData);
  }

  useEffect(() => {
    //props.getData();
    // var result = Object.entries(props.data);
    // setGetData(result);

    i++;
    console.log(i);
  }, []);

  useEffect(() => {
    if (props.data.length > 0) {
      generateDataForChart();
    }
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
