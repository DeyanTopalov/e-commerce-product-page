import Link from "next/link";
import { links } from "@lib/utils";

const NavLinks = ({ className }) => {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.text}>
          <Link
            href={link.href}
            className=" no-underline 
            underline-offset-[10px] 
            transition-all
            duration-150 
            ease-in-out
            hover:cursor-pointer
            hover:text-clr-orange-dark hover:underline hover:decoration-clr-orange-dark 
            hover:underline-offset-8
            md:text-black md:decoration-4 md:underline-offset-[45px]
            md:opacity-50 md:hover:text-black
           md:hover:underline
            md:hover:decoration-orange-500
            md:hover:underline-offset-[43px]
            md:hover:opacity-100 "
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;

// Fix the Li styles so can be changed for the desktop view text colors etc..
