"use client";

import {
  ButtonIncrement,
  ButtonDecrement,
  ButtonAddToCart,
} from "@components/ui/buttons";
import { useState } from "react";

const ProductDescr = () => {
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };
  return (
    <div className=" grid gap-4 px-6 pb-[5.5rem] pt-6 md:max-w-[27.8125rem]">
      <h1 className="text-xs font-bold uppercase tracking-widest text-clr-orange-dark md:text-sm">
        Sneaker Company
      </h1>
      <h2 className="text-[1.75rem] font-bold leading-snug">
        Fall Limited Edition Sneakers
      </h2>
      <p className="text-[15px] text-clr-blue-600">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>
      <div className="Pricing_and_buttons grid gap-4">
        <div className="pricing flex w-full items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-[1.75rem] font-bold">
              <span className="sr-only">Discounted price</span>
              $125.00
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
        <div className="grid h-[56px] w-full grid-cols-3 place-items-center gap-20 overflow-hidden rounded-xl bg-clr-blue-200 ">
          <ButtonDecrement
            className={
              "flex size-full items-center justify-center  hover:cursor-pointer"
            }
            onClick={handleDecrement}
            role="button"
            type="button"
            ariaLabel="Decrement quantity"
          />
          <span className="flex size-full items-center justify-center font-bold">
            {quantity}
          </span>
          <ButtonIncrement
            className={
              "flex size-full items-center justify-center  hover:cursor-pointer"
            }
            onClick={handleIncrement}
          />
        </div>
        {/* <div className="h-[56px] w-full rounded-xl bg-clr-orange-dark"> */}
        <ButtonAddToCart
          className={
            "flex h-[56px] w-full items-center justify-center gap-6 rounded-xl bg-clr-orange-dark  font-bold  text-white hover:cursor-pointer"
          }
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default ProductDescr;
