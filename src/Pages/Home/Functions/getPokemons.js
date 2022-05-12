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
  setPokemons(results);
  setPrevious(previous);
  setNextPage(next);
}
