"use client";

import HamburgerMenu from "./hamburger_menu";
import HamburgerButton from "./hamburger_button";
import { IconCart, Avatar, Logo } from "./ui/icons";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="flex items-center justify-between gap-4 px-5 py-2">
      <HamburgerButton
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        className="z-10 block  md:hidden"
      />
      <Logo className="sm:flex sm:grow" />
      <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />

      <div className="flex items-center gap-2">
        <IconCart />
        <Avatar />
      </div>
    </section>
  );
};

export default Navigation;
