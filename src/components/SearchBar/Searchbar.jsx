import React, { useState } from "react";

import "./SearchBar.css";

function Searchbar() {
  const [PokemonName, setPokemonName] = useState(" ");
  let catchPokemonName = (event) => {
    setPokemonName(event.target.value);
  };

  let searchPokemon = (event) => {
    console.log(event);
  };
  return (
    <div>
      <div>
        <input placeholder="Buscar Pokemon..." onChange={catchPokemonName} />
      </div>
      <div>
        <button onClick={searchPokemon}>Buscar</button>
      </div>
    </div>
  );
}

export default Searchbar;
