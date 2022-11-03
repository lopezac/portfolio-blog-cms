export const reloadPage = () => {
  return window.location.reload();
};

export const numsUpTo = (num) => {
  let numbers = [];
  for (let i = 1; i <= num; i++) {
    numbers.push(i);
  }
  return numbers;
};

export const getApiUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return process.env.REACT_APP_API_DEVELOPMENT;
  }
  return process.env.REACT_APP_API_PRODUCTION;
};
