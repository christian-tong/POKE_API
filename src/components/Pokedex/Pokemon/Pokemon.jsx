import React, { useState, useEffect } from "react";

import "./Pokemon.css";

function Pokemon({ PokemonData }) {
  return (
    <div className="pokemon-card">
      <div className="pokemon-card-image">
        <img
          src={PokemonData.sprites.other.home.front_default}
          alt={PokemonData.name}
        />
      </div>
      <div className="pokemon-card-info">
        <div className="pokemon-card-info-description">
          <h3>{PokemonData.name}</h3>
          <div>#{PokemonData.id}</div>
        </div>
        <div className="pokemon-card-type">
          <div className="pokemon-card-type-info">
            {PokemonData.types.map((type, id) => {
              return (
                <div className="pokemon-card-type-info-text" key={id}>
                  {type.type.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
