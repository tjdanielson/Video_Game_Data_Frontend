import React, { useState, useEffect } from "react";

let i = 0;

const ConsoleSuccessByPublisher = (props) => {
  const [getData, setGetData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  function generateDataForChart() {
    let rawData = chartData.map((data, i) => {
      let publisherArray = Object.entries(data[1]);
      return [data[0], publisherArray];
    });
    console.log("raw data: ", rawData);
    console.log("final data: ", finalData);
    setFinalData(rawData);
    return rawData;
    // let rawData = Object.entries(props.data);
    // console.log("before map runs in generateDataForChart:" + getData);
    // let newData = rawData.map((data, i) => {
    //   let publisherArray = Object.entries(data[1]);
    //   return [data[0], publisherArray];
    // });
    // console.log("After Map runs in generateDataForChart: ", newData);
    // setChartData(newData);
  }

  useEffect(() => {
    props.getData();
    var result = Object.entries(props.data);
    setChartData(result);
  }, []);

  useEffect(() => {
    var result = Object.entries(props.data);
    setChartData(result);
    generateDataForChart();
  }, [props.data]);

  return (
    <div>
      <h3>Consoles</h3>
      {finalData.map((data, i) => {
        return (
          <div key={i}>
            <p>{data[0]}:</p>
            <ul>
              <p>{data[1][1]}</p>
              <p>{data[1][2]}</p>
              <p>{data[1][3]}</p>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ConsoleSuccessByPublisher;
