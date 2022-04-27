import React, { useState, useEffect } from "react";
import axios from "axios";
import SuccessfulConsolesChart from "./Components/SuccesfulConsolesChart";
import { getById, makeGetRequest } from "./services/AxiosRequests";

function App() {
  const [videoGames, setVideoGames] = useState([]);
  const [barChartData, setBarChartData] = useState([]);

  useEffect(() => {
    getGameSalesByConsole();
  }, []);

  async function getGameSalesByConsole() {
    try {
      debugger;
      let response = await axios.get(
        "https://localhost:7260/api/games/gamesByConsole"
      );
      console.log("1 get request");
      setBarChartData(response.data);
    } catch (ex) {
      console.log("Oh no something didn't work right :(", ex);
    }
  }

  //not davids
  //returns one game from pk
  async function getById(id) {
    try {
      let response = await axios.get(`https://localhost:7260/api/games/${id}`);
      console.log(response.data);
      setVideoGames(response.data);
    } catch (ex) {
      console.log("Oh no something didn't work right :(");
    }
  }

  //not davids
  //returns all games
  async function makeGetRequest() {
    try {
      let response = await axios.get(`https://localhost:7260/api/games/`);
      console.log(response.data);
      setVideoGames(response.data);
    } catch (ex) {
      console.log("Oh no something didn't work right :(");
    }
  }

  return (
    <div>
      <SuccessfulConsolesChart data={barChartData} />
    </div>
  );
}

export default App;
