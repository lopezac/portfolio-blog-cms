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
