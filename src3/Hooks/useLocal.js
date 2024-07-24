import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  const initialValue = JSON.parse(localStorage.getItem(key));
  return initialValue || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
