import React from "react";

function Pokemon({ PokemonData, id }) {
  const { name, url } = PokemonData;
  const Pokemon_Name = name;
  const Pokemon_Url = url;

  return (
    <div className="pokemon-card">
      <div className="pokemon-card-image">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png"
          alt={Pokemon_Name}
        />
      </div>
      <div>
        <h3>{Pokemon_Name}</h3>
        <div>#{id + 1}</div>
      </div>
      <div>{Pokemon_Url}</div>
    </div>
  );
}

export default Pokemon;
