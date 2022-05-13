import { api } from "Services/api";

export async function getPokemons({
  filter,
  setPokemons,
  setPrevious,
  setNextPage,
}) {
  const {
    data: { results, previous, next },
  } = await api.get(`/pokemon/${filter}`);
  setNextPage(next);
  setPokemons(results);
  setPrevious(previous);
}
