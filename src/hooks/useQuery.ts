import { useLocation } from "react-router-dom";

interface TQueryParams {
  [key: string]: string | number;
  page: number;
}

export default function useQuery() {
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const queryParams: TQueryParams = { page: 1 };
  query.forEach((value, param) => {
    queryParams[param] = value;
  });
  return queryParams;
}
