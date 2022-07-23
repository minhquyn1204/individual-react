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
