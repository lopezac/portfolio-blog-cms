export const reloadPage = () => {
  return window.location.reload();
};

export const numsUpTo = (num: number) => {
  let numbers = [];
  for (let i = 1; i <= num; i++) {
    numbers.push(i);
  }
  return numbers;
};

export const getApiUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:4000";
  }
  return "https://shielded-lowlands-16962.herokuapp.com";
};
