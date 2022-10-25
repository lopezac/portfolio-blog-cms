import { useLocation } from "react-router-dom";

export default function useQuery() {
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const queryParams = { page: 1 };
  query.forEach((value, param) => {
    queryParams[param] = value;
  });
  return queryParams;
}
