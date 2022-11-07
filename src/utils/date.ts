import { format } from "date-fns";

export const formatDate = (date: string) => {
  try {
    return format(new Date(date), "PP");
  } catch (err) {
    return date;
  }
};

export const formatDateYMD = (date = new Date()) => {
  return format(new Date(date), "y-M-d");
};