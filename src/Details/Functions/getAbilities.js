export function getAbilities(data) {
  const abilities = [];

  data.abilities?.forEach((item, index) => {
    abilities.push({
      id: index,
      name: item.ability.name,
    });
  });
  return abilities;
}
