"use client";

import HamburgerMenu from "./hamburger_menu";
import HamburgerButton from "./hamburger_button";
import { IconCart, Avatar, Logo } from "../ui/icons";
import { useState, useContext } from "react";
import { CartContext } from "@context/CartContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { quantity } = useContext(CartContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="flex items-center justify-between gap-14 px-5 py-2  md:border-b-[1px] md:border-slate-200 md:px-2 md:py-7 2xl:px-0">
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
          className="relative
        "
        >
          <span className="badge full absolute -right-1 -top-1 flex h-[13px] w-[19px] items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
            {quantity}
          </span>
          <IconCart />
        </div>
        <Avatar className=" cursor-pointer rounded-full transition-all duration-150 ease-in-out hover:outline hover:outline-2 hover:outline-offset-1 hover:outline-orange-500" />
      </div>
    </section>
  );
};

export default Navigation;
