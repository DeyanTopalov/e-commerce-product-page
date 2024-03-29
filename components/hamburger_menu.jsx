// import Link from "next/link";
// import { links } from "@lib/utils";
import NavLinks from "./nav_links";
import { useEffect, useRef } from "react";
import { useWindowWidth } from "@lib/hooks";

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  //   const mobileView = window.innerWidth <= 768;

  const width = useWindowWidth();
  const mobileView = width <= 768;
  //   const mobileView = width !== undefined || (width > 0 && width <= 768);

  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
      toggleMenu();
    }
  };

  useEffect(() => {
    // Add click event listener on document
    document.addEventListener("click", handleClickOutside);

    // Remove listener on cleanup
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]); // Re-run useEffect on isOpen change

  return (
    <>
      {mobileView ? (
        <nav
          ref={menuRef}
          className={`${isOpen ? "inset-y-0 left-0 " : "invisible inset-y-0 -left-full"} absolute z-0 h-screen w-[66.6%] bg-white  transition-all duration-300 ease-in-out`}
          onClick={handleClickOutside}
        >
          <NavLinks className="z-10 flex flex-col gap-5 bg-inherit px-6 pt-[5.75rem] " />
        </nav>
      ) : (
        <nav className="flex grow">
          <NavLinks className="flex grow items-center justify-between" />
        </nav>
      )}
    </>
  );
};

export default HamburgerMenu;

//   <ul className="z-10 bg-inherit px-6 pt-[5.75rem]">
//     {links.map((link) => (
//       <li key={link.text}>
//         <Link
//           href={link.href}
//           className="z-10 text-lg font-bold text-black hover:cursor-pointer hover:text-clr-orange-dark"
//         >
//           {link.text}
//         </Link>
//       </li>
//     ))}
//   </ul>;
