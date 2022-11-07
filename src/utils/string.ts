export const formatTitle = (title: string): string => {
  return title.toLowerCase().replaceAll(" ", "-");
};

export const isJSON = (string: string): boolean => {
  try {
    JSON.parse(string);
  } catch (error) {
    return false;
  }
  return true;
};
