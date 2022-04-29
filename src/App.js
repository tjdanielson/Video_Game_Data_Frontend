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

  async function getGameSalesByConsole() {
    try {
      let response = await axios.get(
        "https://localhost:7260/api/games/gamesByConsole"
      );
      console.log("Get Games Sales response: ", response.data);
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
      console.log(response.data);
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
      console.log("This came from search bar!", response.data);
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
      console.log("Get best games: ", response.data);
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
      console.log("Get publisher sales by console: ", response.data);
      setPublisherSales(response.data);
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
