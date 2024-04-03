import { IconMinus, IconPlus, IconCart } from "./icons";

export const ButtonIncrement = ({ className, onClick }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      role="button"
      type="button"
      aria-label="Increment quantity"
    >
      <IconPlus />
    </button>
  );
};

// Set attributes based on the usecase, Not required in this case but for practice
export const ButtonDecrement = ({
  className,
  onClick,
  role,
  type,
  ariaLabel,
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      role={role || "test"}
      type={type || "button"}
      aria-label={ariaLabel || "Test"}
    >
      <IconMinus />
    </button>
  );
};

// Template to set dynamic role, type & aria-label
export const SomeButton = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      SomeButton
    </button>
  );
};
