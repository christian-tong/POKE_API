import React, { useState, useEffect } from "react";

import Pokemon from "./Pokemon/Pokemon";
import { API_ShowPokedex } from "../../API/API_ShowPokedex";

import "./Pokedex.css";

function Pokedex() {
  const [ShowPokedex, SetShowPokedex] = useState([]);

  // HACER CONSULTA Y OBTENER DATOS DE LA API
  const GET_API_ShowPokedex = async () => {
    try {
      const data = await API_ShowPokedex(5, 0);
      SetShowPokedex(data.results);
    } catch (error) {}
  };

  // RENDERIZAR POR DEFECTO
  useEffect(() => {
    GET_API_ShowPokedex();
  }, []);

  return (
    <div>
      <div className="header">
        <h1>Pokedex</h1>
        <div>Pagination</div>
      </div>
      <div className="pokedex-grid">
        {ShowPokedex.map((PokemonData, id) => {
          return (
            <div key={id + 1}>
              <Pokemon PokemonData={PokemonData} id={id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pokedex;
