import React, { useState } from "react";
import AnimeList from "../components/AnimeList";

const Home = () => {
  const [inputVal, setInputVal] = useState("search");

  return (
    <div className="home-container">
      <div className="search-container">
        <input
          type="search"
          placeholder="Search .."
          onChange={({ target: { value } }) => setInputVal(value)}
        />
        <i className="fas fa-search"></i>
      </div>

      <AnimeList searchVal={inputVal}></AnimeList>
    </div>
  );
};

export default Home;
