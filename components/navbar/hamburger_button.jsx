import { IconMenu, IconClose } from "../ui/icons";

const HamburgerButton = ({ isOpen, toggleMenu, className }) => {
  return (
    <button onClick={toggleMenu} className={className}>
      {isOpen ? <IconClose /> : <IconMenu />}
    </button>
  );
};

export default HamburgerButton;
