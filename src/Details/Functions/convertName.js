export function convertName(data) {
  const response = data?.charAt(0).toUpperCase() + data?.slice(1);
  return response;
}
