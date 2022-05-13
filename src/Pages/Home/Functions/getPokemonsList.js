import { getPokeId } from "./getPokeId";

export function getPokemonsList(data) {
  const pokemons = [];

  data?.forEach((item) => {
    pokemons.push({
      id: getPokeId(item?.url),
      name: item?.name,
    });
  });
  return pokemons;
}
