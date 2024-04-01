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
