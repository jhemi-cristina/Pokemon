export function getParamsPage(data) {
  const responseData = data.split("/");
  return responseData[6];
}
