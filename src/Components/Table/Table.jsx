import StatsButton from "../statsButton";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const DataTable = (props) => {
  if (props.videoGames.length === 0) {
    return null;
  } else {
    return (
      <div className="tableHolder">
        <Table striped bordered hover variant="dark" className="Table">
          <thead>
            <tr>
              <th>TITLE</th>
              <th>PLATFORM</th>
              <th>RELEASE YEAR</th>
              <th>PUBLISHER</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.videoGames.map((videoGame, i) => {
              return (
                <tr key={i}>
                  <td className="tableBlock">{videoGame.name}</td>
                  <td className="tableBlock">{videoGame.platform}</td>
                  <td className="tableBlock">{videoGame.year}</td>
                  <td className="tableBlock">{videoGame.publisher}</td>
                  <td>
                    <StatsButton
                      gameName={videoGame.name}
                      getByName={props.getByName}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
};

export default DataTable;
