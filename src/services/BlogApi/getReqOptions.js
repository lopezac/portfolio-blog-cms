export default function getReqOptions(method = "GET", token = null) {
  const options = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  if (token) {
    options.headers["Authorization"] = `Bearer ${token}`;
  }

  return options;
}
