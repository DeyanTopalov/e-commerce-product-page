"use client";

import { useState, useContext, useEffect } from "react";
import { CartContext } from "@context/CartContext";
import Image from "next/image";
import HamburgerMenu from "./hamburger_menu";
import HamburgerButton from "./hamburger_button";
import { IconCart, Avatar, Logo, IconDelete } from "../ui/icons";
import { productPrice, formatCurrency } from "@lib/utils";
import { productThumbnails } from "@lib/utils";

const Navigation = () => {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { cartQuantity } = useContext(CartContext);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className=" z-[1] flex items-center justify-between gap-14 px-5 pb-6 pt-4 md:border-b-[1px] md:border-slate-200 md:px-2  md:py-7 2xl:px-0">
      <div className="flex items-center gap-4">
        <HamburgerButton
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          className="z-50 block  md:hidden"
        />
        <Logo className="mb-1 sm:flex sm:grow" />
      </div>

      <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />

      <div className="flex items-center gap-6 md:gap-12">
        <div
          className="relative grid
        "
        >
          {/* Renders badge on client only, to avoid hydration mismatch */}
          {isClient && (
            <span
              className={`${
                cartQuantity < 1
                  ? "hidden"
                  : "badge full absolute -right-1 -top-1 flex h-[13px] w-[19px] items-center justify-center rounded-full bg-clr-orange-dark text-[10px] font-bold text-white"
              }`}
            >
              {cartQuantity}
            </span>
          )}

          <IconCart />
        </div>
        <Avatar className=" cursor-pointer rounded-full transition-all duration-150 ease-in-out hover:outline hover:outline-2 hover:outline-offset-1 hover:outline-orange-500" />
      </div>
      {/* fix for client render only due to hidration */}
      <div className="absolute inset-0 -z-10 flex h-full  w-full justify-center  md:justify-end">
        {/* fix nav border overlay due to -z-10 */}
        <div className=" z-[9999] flex h-[256px] w-full max-w-[360px] translate-y-[76px] flex-col rounded-xl  bg-white px-6 pb-8  pt-6 shadow-2xl md:translate-y-[94px]">
          <h2 className="border-b-[1px] border-slate-200 pb-7 font-bold">
            Cart
          </h2>
          <div
            className={` ${cartQuantity > 0 ? "hidden" : "grid h-full w-full place-content-center"} `}
          >
            <p className="font-bold text-clr-blue-600">Your Cart is empty</p>
          </div>

          <div className={`${cartQuantity < 1 ? "hidden" : "block"} pt-6   `}>
            <div className=" flex items-center justify-between">
              <div className="img size-[3.125rem] overflow-hidden rounded-lg">
                <Image
                  src={productThumbnails[0].url}
                  width={50}
                  height={50}
                  alt={`Product Image`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="descr text-clr-blue-600">
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  {formatCurrency(productPrice) + " x" + cartQuantity + " "}
                  <span className="font-bold text-slate-950">
                    {formatCurrency(productPrice * cartQuantity)}
                  </span>
                </p>
              </div>
              <button className="bin cursor-pointer">
                <IconDelete />
              </button>
            </div>
            <button className="mt-6 h-[56px] w-full rounded-xl bg-clr-orange-dark font-bold text-white hover:opacity-75">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;

// remove the draft classes of Pricing_and_buttons etc..

//! ToDo
//* Export Cart dropdown to component
//* work on click outside the cart to close
//* add delete functionality
