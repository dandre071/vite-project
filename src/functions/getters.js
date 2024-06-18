export function getStorageValue(key, defaultValue) {
  const initialValue = JSON.parse(localStorage.getItem(key));
  return initialValue || defaultValue;
}
