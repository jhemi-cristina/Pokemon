export function getParamsPage(data) {
  const responseData = data ? data?.split("/") : null;
  return responseData[6] || null;
}
