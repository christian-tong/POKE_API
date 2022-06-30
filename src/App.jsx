import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Pokedex from "./components/Pokedex/Pokedex";
import Searchbar from "./components/SearchBar/Searchbar";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Searchbar />
        <Pokedex />
      </div>
    </div>
  );
}

export default App;
