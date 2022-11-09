type RequestOptions = {
  method: string;
  headers: {
    Accept: string;
    "Content-Type": string;
    Authorization?: string;
  };
};

export default function getReqOptions(method = "GET", token?: string | null) {
  const options: RequestOptions = {
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
