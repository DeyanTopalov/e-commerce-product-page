"use client";

import { createContext, useState } from "react";
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

  return (
    <CartContext.Provider value={{ cartQuantity, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
