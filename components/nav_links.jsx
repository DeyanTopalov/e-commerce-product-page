import Link from "next/link";
import { links } from "@lib/utils";

const NavLinks = ({ className }) => {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.text}>
          <Link
            href={link.href}
            className="z-10 text-lg font-bold text-black hover:cursor-pointer hover:text-clr-orange-dark"
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
