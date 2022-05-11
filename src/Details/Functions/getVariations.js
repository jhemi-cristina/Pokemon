export function getVariations(data) {
  const variations = [];

  data?.forEach((item, index) => {
    variations.push({
      id: index,
      name: item?.species?.name,
    });
  });
  return variations;
}
