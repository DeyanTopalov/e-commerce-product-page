import { useState, useEffect, useRef } from "react";

export const useHamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    console.log("Toggling Menu");
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    console.log("useEffect triggered, isOpen:", isOpen);
    const clickAwayListener = document.addEventListener(
      "click",
      handleOutsideClick,
    );
    return () => document.removeEventListener("click", clickAwayListener);
  }, [isOpen]);
  return { isOpen, toggleMenu, menuRef };
};

export const useWindowWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Simulate resize event on mount
    window.dispatchEvent(new Event("resize"));

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};
