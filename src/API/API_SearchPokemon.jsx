// API ENCARGADA DE BUSCAR EL NOMBRE DEL POKEMON

export const API_SearchPokemon = async (PokemonName) => {
  const URL_POKEAPI = `https://pokeapi.co/api/v2/pokemon/${PokemonName}`;
  try {
    const response = await fetch(URL_POKEAPI);
    const data = await response.json();
    return data;
  } catch (error) {}
};
