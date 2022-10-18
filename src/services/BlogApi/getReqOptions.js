export default function getReqOptions(method = "GET") {
  return {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
}
