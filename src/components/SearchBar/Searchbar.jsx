import React, { useState } from "react";

import { API_SearchPokemon } from "../../API/API_SearchPokemon";

import "./SearchBar.css";

function Searchbar() {
  const [PokemonName, setPokemonName] = useState(" ");
  const [Pokemon, setPokemon] = useState();

  // CAPTURAR NOMBRE BARRA DE BUSQUEDA
  let catchPokemonName = (event) => {
    setPokemonName(event.target.value);
  };

  // BUSCAR AL POKEMON
  let searchPokemon = async (event) => {
    let PokemonNametoLowerCase = PokemonName.toLowerCase();
    const data = await API_SearchPokemon(PokemonNametoLowerCase);
    setPokemon(data);
  };

  return (
    <div className="searchbar-container">
      {/* BARRA DE BUSQUEDA */}
      <div className="searchbar-container-search">
        <input placeholder="Buscar Pokemon..." onChange={catchPokemonName} />
      </div>

      {/* BOTON BUSCAR POKEMON */}
      <div className="searchbar-container-button">
        <button onClick={searchPokemon}>Buscar</button>
      </div>

      {/* MOSTRAR POKEMON */}
      <div>
        {Pokemon && (
          <div>
            <img src={Pokemon.sprites.front_default} alt={Pokemon.name}></img>
            <div>{Pokemon.name}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Searchbar;
