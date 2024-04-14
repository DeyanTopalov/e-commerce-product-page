import { useState, useEffect } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Simulate resize event on mount, needed due to SSR
    window.dispatchEvent(new Event("resize"));

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

export function useLocalStorage(key, initialValue) {
  //* State to store the value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error retrieving item from local storage: ${error}`);
      return initialValue;
    }
  });

  // Function to set the value in react state and local storage
  const setValue = (value) => {
    const newValue = value instanceof Function ? value(storedValue) : value;
    setStoredValue(newValue);
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.warn(`Error setting item in local storage: ${error}`);
    }
  };

  useEffect(() => {
    function handleStorageChange() {
      const newValue = window.localStorage.getItem(key);
      if (newValue && newValue !== storedValue) {
        setStoredValue(JSON.parse(newValue));
      }
    }
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [storedValue, key]);
  return [storedValue, setValue];
}
