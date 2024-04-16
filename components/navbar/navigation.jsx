"use client";

import HamburgerMenu from "./hamburger_menu";
import HamburgerButton from "./hamburger_button";
import { IconCart, Avatar, Logo } from "../ui/icons";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "@context/CartContext";

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
    <section className=" flex items-center justify-between gap-14 px-5 pb-6 pt-4  md:border-b-[1px] md:border-slate-200 md:px-2 md:py-7 2xl:px-0">
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
      <div className="absolute inset-0 -z-10 flex h-full  w-full justify-center  md:justify-end">
        <div className=" h-[256px] w-full max-w-[360px] translate-y-[76px]  rounded-xl  bg-white px-6 pb-8  pt-6 shadow-2xl md:translate-y-[94px]">
          <h2 className="border-b-[1px] border-slate-200 pb-7 font-bold">
            Cart
          </h2>
          {/* <p>Your Cart is empty</p> */}
          <div className="content flex items-center justify-between py-6">
            <div className="img size-[50px] rounded-lg bg-slate-400"></div>
            <div className="descr text-clr-blue-600">
              <p>Fall Limited Edition Sneakers</p>
              <p>
                $125.00 x3{" "}
                <span className="font-bold text-slate-950">$375.00</span>
              </p>
            </div>
            <div className="bin h-[16px] w-[14px] bg-red-500"></div>
          </div>
          <button className="h-[56px] w-full rounded-xl bg-clr-orange-dark font-bold text-white hover:opacity-75">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
