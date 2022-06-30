// API ENCARGADA DE BUSCAR EL URL DEL POKEMON

export const API_SearchPokemonByURL = async (URL) => {
  const URL_POKEAPI = URL;
  try {
    const response = await fetch(URL_POKEAPI);
    const data = await response.json();
    return data;
  } catch (error){
    }
};
