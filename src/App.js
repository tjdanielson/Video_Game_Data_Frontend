import React, { useState, useEffect } from "react";
import axios from "axios";
//Components VVV
import Header from "./Components/header";
import SuccessfulConsolesChart from "./Components/SuccesfulConsolesChart";
import DataTable from "./Components/Table/Table";
import BestGamesYearlyChart from "./Components/BestGamesYearlyChart";
import ConsoleSuccessByPublisher from "./Components/ConsoleSuccessByPublisher";
//Useless import VVV
import { getById, makeGetRequest } from "./services/AxiosRequests";

function App() {
  const [requestReload, setRequestReload] = useState(true);
  const [videoGames, setVideoGames] = useState([]);
  const [barChartData, setBarChartData] = useState([]);
  const [nameBarChartData, setNameBarChartData] = useState([]);
  const [bestGames, setBestGames] = useState([]);
  const [publisherSales, setPublisherSales] = useState([]);

  useEffect(() => {
    getPublisherSalesByConsole();
  }, []);

  async function getGameSalesByConsole() {
    try {
      let response = await axios.get(
        "https://localhost:7260/api/games/gamesByConsole"
      );
      setBarChartData(response.data);
    } catch (ex) {
      console.log("Oh no something didn't work right :(", ex);
    }
  }

  async function getByName(name) {
    try {
      let response = await axios.get(
        `https://localhost:7260/api/games/gamebyname/${name}`
      );
      setVideoGames(response.data);
      let newResponse = [];
      response.data.forEach((i) => {
        newResponse.push([i.platform, i.globalSales]);
      });
      setNameBarChartData(newResponse);
    } catch (ex) {
      console.log("Oh no something didn't work right :(");
    }
  }

  async function makeGetRequestBySearch(searchTerm) {
    try {
      let response = await axios.get(
        `https://localhost:7260/api/games/search/${searchTerm}`
      );
      setVideoGames(response.data);
    } catch (ex) {
      console.log("Oh no something didn't work right :(");
    }
  }

  async function getBestGamesYearly() {
    try {
      let response = await axios.get(
        "https://localhost:7260/api/games/bestGamesYearly"
      );
      setBestGames(response.data);
    } catch (ex) {
      console.log("Oh no something didn't work right :(", ex);
    }
  }

  async function getPublisherSalesByConsole() {
    try {
      let response = await axios.get(
        "https://localhost:7260/api/games/publisherSalesByConsole"
      );
      let returnValue = Object.entries(response.data);
      setPublisherSales(returnValue);
    } catch (ex) {
      console.log("Oh no something didn't work right :(", ex);
    }
  }

  return (
    <div>
      <Header getSearch={makeGetRequestBySearch} />
      <SuccessfulConsolesChart
        getData={getGameSalesByConsole}
        data={barChartData}
        nameData={nameBarChartData}
      />
      <DataTable videoGames={videoGames} getByName={getByName} />
      <BestGamesYearlyChart getData={getBestGamesYearly} data={bestGames} />
      <ConsoleSuccessByPublisher
        getData={getPublisherSalesByConsole}
        data={publisherSales}
      />
    </div>
  );
}

export default App;
