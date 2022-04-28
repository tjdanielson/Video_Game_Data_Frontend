import React, { useState } from "react";
import "./styles.css";

const Header = (props) => {
  const [searchWord, setSearchWord] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.getSearch(searchWord);
  };
  return (
    <div className="spaceBetweenHead">
      <h1>Video Games Data</h1>
      <form onSubmit={handleSubmit} className="searchBox">
        <input
          placeholder="search by video game"
          type="text"
          value={searchWord}
          onChange={(event) => setSearchWord(event.target.value)}
        />
        <button type="submit" style={{ cursor: "pointer" }}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default Header;
