import React from "react";

export const useLocalStorage = (key: string, initialValue: string): [string, (value: string) => void] => {
  const [value, setNewValue] = React.useState(() => {
    if (typeof window !== "undefined") {
      const storedValue = window.localStorage.getItem(key);
      return storedValue !== null ? storedValue : initialValue;
    }
    return initialValue;
  });

  const setValue = (newValue: string) => {
    setNewValue(newValue);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, newValue);
    }
  }

  return [value, setValue];
}