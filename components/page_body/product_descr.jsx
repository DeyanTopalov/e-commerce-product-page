"use client";

import {
  ButtonIncrement,
  ButtonDecrement,
  ButtonAddToCart,
} from "@components/ui/buttons";
import { productPrice } from "@lib/utils";
import { useState, useContext } from "react";
import { CartContext } from "@context/CartContext";

const ProductDescr = ({ className }) => {
  const { addToCart } = useContext(CartContext);
  const [productQuantity, setProductQuantity] = useState(1);

  const handleIncrement = () => {
    setProductQuantity(productQuantity + 1);
  };
  const handleDecrement = () => {
    productQuantity > 1 && setProductQuantity(productQuantity - 1);
  };

  return (
    <div className={className}>
      <h1 className="text-xs font-bold uppercase tracking-widest text-clr-orange-dark md:text-sm">
        Sneaker Company
      </h1>
      <h2 className="text-[1.75rem] font-bold leading-snug md:text-[2.75rem] md:leading-[3rem]">
        Fall Limited Edition Sneakers
      </h2>
      <p className="text-[15px] text-clr-blue-600 md:text-base ">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>
      <div className="Pricing_and_buttons grid gap-4 md:gap-8">
        <div className="pricing flex w-full items-center justify-between md:flex-col md:items-start md:gap-3">
          <div className="flex items-center gap-6">
            <span className="text-[1.75rem] font-bold">
              <span className="sr-only">Discounted price</span>
              {"$" + productPrice.toFixed(2)}
            </span>
            <span className="rounded-lg bg-clr-orange-light px-2 py-1 text-base font-bold text-clr-orange-dark">
              <span className="sr-only">Discounted %</span>
              50%
            </span>
          </div>
          <span className="font-bold text-clr-blue-400 line-through">
            <span className="sr-only">Original price</span>
            $250.00
          </span>
        </div>
        <div className="btns_and_counter grid gap-4 md:grid-cols-[37%,63%]">
          <div className="grid h-[56px] w-full grid-cols-3 place-items-center gap-20 overflow-hidden rounded-xl bg-clr-blue-200 md:gap-0 ">
            <ButtonDecrement
              className={
                "flex size-full cursor-pointer items-center  justify-center hover:opacity-75"
              }
              onClick={handleDecrement}
              role="button"
              type="button"
              ariaLabel="Decrement quantity"
            />
            <span className="flex size-full items-center justify-center font-bold ">
              {productQuantity}
            </span>
            <ButtonIncrement
              className={
                "flex size-full cursor-pointer items-center  justify-center hover:opacity-75"
              }
              onClick={handleIncrement}
            />
          </div>

          <ButtonAddToCart
            className={
              "flex h-[56px] w-full items-center justify-center gap-6  rounded-xl  bg-clr-orange-dark font-bold text-white drop-shadow-[0_25px_25px_rgba(255,125,26,0.25)] hover:cursor-pointer hover:opacity-75 md:drop-shadow-none"
            }
            onClick={() => {
              addToCart(productQuantity);
              setProductQuantity(1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDescr;

// remove the draft classes of Pricing_and_buttons etc..
