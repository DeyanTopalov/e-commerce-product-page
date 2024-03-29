import Image from "next/image";

export const IconCart = () => {
  return (
    <Image
      src="/icon-cart.svg"
      width={22}
      height={20}
      alt="shoping cart icon"
      className=""
    />
  );
};

export const IconClose = () => {
  return (
    <Image
      src="/icon-close.svg"
      width={13.44}
      height={13.44}
      alt="menu close icon"
      className=""
    />
  );
};

export const IconMenu = () => {
  return (
    <Image
      src="/icon-menu.svg"
      width={16}
      height={15}
      alt="menu icon"
      className=""
    />
  );
};

export const IconDelete = () => {
  return (
    <Image
      src="/icon-delete.svg"
      width={14}
      height={16}
      alt="delete icon"
      className=""
    />
  );
};

export const IconMinus = () => {
  return (
    <Image
      src="/icon-minus.svg"
      width={12}
      height={3.33}
      alt="minus icon"
      className=""
    />
  );
};

export const IconPlus = () => {
  return (
    <Image
      src="/icon-plus.svg"
      width={12}
      height={12}
      alt="plus icon"
      className=""
    />
  );
};

export const IconNext = () => {
  return (
    <>
      <Image
        src="/icon-next.svg"
        width={5.71}
        height={11.43}
        alt="next icon"
        className="block md:hidden"
      />
      <Image
        src="/icon-next.svg"
        width={8}
        height={16}
        alt="next icon"
        className="hidden md:block"
      />
    </>
  );
};

export const IconPrevious = () => {
  return (
    <>
      <Image
        src="/icon-previous.svg"
        width={5.71}
        height={11.43}
        alt="previous icon"
        className="block md:hidden"
      />
      <Image
        src="/icon-previous.svg"
        width={8}
        height={16}
        alt="previous icon"
        className="hidden md:block"
      />
    </>
  );
};

export const Avatar = () => {
  return (
    <>
      <Image
        src="/image-avatar.png"
        width={24}
        height={24}
        alt="user avatar photo"
        className="block md:hidden"
      />
      <Image
        src="/image-avatar.png"
        width={50}
        height={50}
        alt="user avatar photo"
        className="hidden md:block"
      />
    </>
  );
};
