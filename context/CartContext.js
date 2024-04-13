"use client";

import { createContext, useState } from "react";

const CartContext = createContext({ quantity: 0, setQuantity: () => {} });

const CartProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);

  const addToCart = (newQuantity) => {
    setQuantity(quantity + newQuantity);
  };

  return (
    <CartContext.Provider value={{ quantity, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
