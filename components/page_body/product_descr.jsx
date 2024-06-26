"use client";

import {
  ButtonIncrement,
  ButtonDecrement,
  ButtonAddToCart,
} from "@components/ui/buttons";
import { formatCurrency, productInfo } from "@lib/utils";
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
    <section className={className}>
      <h1 className="text-xs font-bold uppercase tracking-widest text-clr-orange-dark md:text-sm">
        {productInfo.company}
      </h1>
      <h2 className="text-[1.75rem] font-bold leading-snug md:text-[2.75rem] md:leading-[3rem]">
        {productInfo.title}
      </h2>
      <p className="text-[0.9375rem] text-clr-blue-600 md:text-base ">
        {productInfo.description}
      </p>
      <div className=" grid gap-4 md:gap-8">
        <div className=" flex w-full items-center justify-between md:flex-col md:items-start md:gap-3">
          <div className="flex items-center gap-6">
            <span className="text-[1.75rem] font-bold">
              <span className="sr-only">Discounted price</span>
              {formatCurrency(productInfo.discountedPrice)}
            </span>
            <span className="rounded-lg bg-clr-orange-light px-2 py-1 text-base font-bold text-clr-orange-dark">
              <span className="sr-only">Discounted %</span>
              {productInfo.discountPercentage}
            </span>
          </div>
          <span className="font-bold text-clr-blue-400 line-through">
            <span className="sr-only">Original price</span>
            {formatCurrency(productInfo.originalPrice)}
          </span>
        </div>
        <div className="grid gap-4 md:grid-cols-[37%,63%]">
          <div className="grid h-[3.5rem] w-full grid-cols-3 place-items-center gap-20 overflow-hidden rounded-xl bg-clr-blue-200 md:gap-0 ">
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
              "flex h-[3.5rem] w-full cursor-pointer items-center justify-center  gap-6  rounded-xl bg-clr-orange-dark font-bold text-white drop-shadow-[0_25px_25px_rgba(255,125,26,0.25)] hover:opacity-75 md:drop-shadow-none"
            }
            onClick={() => {
              addToCart(productQuantity);
              setProductQuantity(1);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDescr;
