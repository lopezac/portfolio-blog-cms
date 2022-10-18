export default function getApiUrl() {
  if (process.env.NODE_ENV === "development") {
    return process.env.REACT_APP_API_DEVELOPMENT;
  }
  return process.env.REACT_APP_API_PRODUCTION;
}
