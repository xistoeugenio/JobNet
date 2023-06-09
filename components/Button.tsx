import { CSSProperties } from "react";

interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick?: () => void;
  submit?: boolean;
  disabled?: boolean;
  outline?: boolean;
  aditionalStyle?: CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  onClick,
  submit,
  large,
  disabled,
  outline,
  aditionalStyle,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={submit ? "submit" : "button"}
      className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        font-semibold
        hover:opacity-80
        transition
        border-2
        ${fullWidth ? "w-full" : "w-fit"}
        ${secondary ? "bg-white" : "bg-sky-500"}
        ${secondary ? "text-black" : "text-white"}
        ${secondary ? "border-black" : "border-sky-500"}
        ${large ? "text-xl" : "text-md"}
        ${large ? "px-5" : "px-4"}
        ${large ? "py-3" : "py-2"}
        ${outline ? "bg-transparent" : ""}
        ${outline ? "border-white" : ""}
        ${outline ? "text-white" : ""}
      `}
      style={aditionalStyle}
    >
      {label}
    </button>
  );
};

export default Button;
