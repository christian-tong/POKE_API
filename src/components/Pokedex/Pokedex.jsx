import React, { useState, useEffect } from "react";

import Pokemon from "./Pokemon/Pokemon";

import { API_ShowPokedex } from "../../API/API_ShowPokedex";
import { API_SearchPokemonByURL } from "../../API/API_SearchPokemonByURL";

import "./Pokedex.css";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";

function Pokedex() {
  const [ShowPokedex, SetShowPokedex] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [CountPagination, setCountPagination] = useState(0);
  const [TotalPokemon, setTotalPokemon] = useState();

  const CountShowPokemon = 30;

  // HACER CONSULTA Y OBTENER DATOS DE LA API
  const GET_API_ShowPokedex = async () => {
    try {
      setIsLoading(true);
      const data = await API_ShowPokedex(
        CountShowPokemon,
        CountShowPokemon * CountPagination
      );
      const promisePokemon = data.results.map(async (Pokemon) => {
        return await API_SearchPokemonByURL(Pokemon.url);
      });
      const results = await Promise.all(promisePokemon);
      setTotalPokemon(data.count);
      SetShowPokedex(results);
      setIsLoading(false);
    } catch (error) {}
  };

  const TotalPokemonPage = () => {
    const NumTotalPokemonPage = Math.ceil(TotalPokemon / CountShowPokemon);
    return NumTotalPokemonPage;
  };

  const CountPageUp = () => {
    setCountPagination(CountPagination + 1);
  };

  const CountPageDown = () => {
    setCountPagination(CountPagination - 1);
  };

  // RENDERIZAR POR DEFECTO
  useEffect(() => {
    GET_API_ShowPokedex();
  }, [CountPagination]);

  return (
    <div>
      <div className="header">
        <h1>Pokedex</h1>
        <Pagination
          onLeftClick={CountPageDown}
          onRightClick={CountPageUp}
          page={CountPagination + 1}
          totalPages={TotalPokemonPage()}
        />
      </div>

      {IsLoading ? (
        <Loading />
      ) : (
        <div className="pokedex-grid">
          {ShowPokedex.map((PokemonData, id) => {
            return (
              <div key={id + 1}>
                <Pokemon PokemonData={PokemonData} />
              </div>
            );
          })}
        </div>
      )}

      <div className="footer">
        <h1>Pokedex</h1>
        <Pagination
          onLeftClick={CountPageDown}
          onRightClick={CountPageUp}
          page={CountPagination + 1}
          totalPages={TotalPokemonPage()}
        />
      </div>
    </div>
  );
}

export default Pokedex;
