import axios from 'axios';
export const convertToString = (length, number) => {
  length = length.toString();
  let string = '' + length;
  let a = [...[...Array(number - length.length)].map((i) => 0), string];
  return a.join('');
};
export const debouncee = (func, delay) => {
  let timeout;
  return (...args) => {
    if (timeout) clearTimeout(timeout);
    setTimeout(() => {
      func(...args);
      timeout = null;
    }, delay);
  };
};
