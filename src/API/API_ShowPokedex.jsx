// API ENCARGADA DE MOSTRAR LOS POKEMONES DE LA POKEDEX

export const API_ShowPokedex = async (limit, offset) => {
  const URL_POKEAPI = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}/`;
  try {
    const response = await fetch(URL_POKEAPI);
    const data = await response.json();
    return data;
  } catch (error) {}
};
