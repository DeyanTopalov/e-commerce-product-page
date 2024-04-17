"use client";

import { createContext } from "react";
import { useLocalStorage } from "@lib/hooks";

const CartContext = createContext({
  cartQuantity: 0,
  setCartQuantity: () => {},
});

const CartProvider = ({ children }) => {
  const [cartQuantity, setCartQuantity] = useLocalStorage("cartQuantity", 0);

  const addToCart = (newQuantity) => {
    setCartQuantity(cartQuantity + newQuantity);
  };

  const deleteFromCart = () => {
    setCartQuantity(0);
    localStorage.removeItem("cartQuantity");
  };

  return (
    <CartContext.Provider value={{ cartQuantity, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
