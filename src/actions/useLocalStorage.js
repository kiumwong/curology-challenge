import React, { useState } from 'react';

function useLocalStorage(key, value) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : value;
    } catch (err) {
      return value;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      return err;
    }
  };
  return [storedValue, setValue];
}

export default useLocalStorage;
