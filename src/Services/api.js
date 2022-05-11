import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
});
const apiImages =
  "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world";

export { api, apiImages };
