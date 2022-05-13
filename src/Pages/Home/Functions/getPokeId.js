export function getPokeId(data) {
  const regex = /[0-9]+/gi;

  const id = data.match(regex);
  const response = Number(id[1]);

  return response;
}
