import React, { useState } from "react";

import { API_SearchPokemonByName } from "../../API/API_SearchPokemonByName";

import "./SearchBar.css";

function Searchbar() {
  const [PokemonName, setPokemonName] = useState(" ");
  const [Pokemon, setPokemon] = useState("");

  // CAPTURAR NOMBRE BARRA DE BUSQUEDA
  let catchPokemonName = (event) => {
    setPokemonName(event.target.value);
  };

  // BUSCAR AL POKEMON
  let searchPokemon = async (event) => {
    let PokemonNameToLowerCase = PokemonName.toLowerCase();
    const data = await API_SearchPokemonByName(PokemonNameToLowerCase);
    setPokemon(data);
  };

  return (
    <div className="searchbar-container">
      {/* BARRA DE BUSQUEDA */}
      <div className="searchbar-container-search">
        <input placeholder="Buscar Pokemon..." onChange={catchPokemonName}  aria-label="Search"/>
      </div>

      {/* BOTON BUSCAR POKEMON */}
      <div className="searchbar-container-button">
        <button onClick={searchPokemon}>Buscar</button>
      </div>

      {/* MOSTRAR POKEMON */}
      <div>
        {Pokemon && (
          <div className="container">
            <img
              className="searchbar-pokemon-image"
              src={Pokemon.sprites.other.home.front_default}
              alt={Pokemon.name}
            ></img>
            <div>{Pokemon.name.toUpperCase()}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Searchbar;
