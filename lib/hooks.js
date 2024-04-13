import { useState, useEffect, createContext } from "react";

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

// export const createContextHook = (initialState) => {
//   const Context = createContext(initialState);

//   const ContextProvider = ({ children }) => {
//     const [state, setState] = useState(initialState);

//     return (
//       <Context.Provider value={{ state, setState }}>
//         {children}
//       </Context.Provider>
//     );
//   };
//   return [Context, ContextProvider];
// };
