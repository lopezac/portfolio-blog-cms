import { format } from "date-fns";

export const formatDate = (date = new Date().getDate()) => {
  return format(new Date(date), "PP");
};
