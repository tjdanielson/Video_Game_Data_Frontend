import React, { useState, useEffect } from "react";
import axios from "axios";
import { getById, makeGetRequest } from "./AxiosRequests";

function App() {
  const [requestReload, setRequestReload] = useState(true);
  const [videoGames, setVideoGames] = useState([]);

  useEffect(() => {
    if (requestReload) {
      makeGetRequest();
      setRequestReload(false);
    }
  }, [requestReload]);

  async function getById() {
    try {
      let response = await axios.get(`https://localhost:7260/api/games/1`);
      console.log(response.data);
      setVideoGames(response.data);
    } catch (ex) {
      console.log("Oh no something didn't work right :(");
    }
    return videoGames;
  }

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
      <h2>Video Games</h2>
    </div>
  );
}

export default App;
