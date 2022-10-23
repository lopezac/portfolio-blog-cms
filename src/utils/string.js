export const formatTitle = (title) => {
  return title.toLowerCase().replaceAll(" ", "-");
};

export const isJSON = (string) => {
  try {
    JSON.parse(string);
  } catch (error) {
    return false;
  }
  return true;
};
