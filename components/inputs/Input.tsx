import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputsProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  small?: boolean;
  xsmall?: boolean;
}

const Input: React.FC<InputsProps> = ({
  small,
  xsmall,
  name,
  ...inputAtributes
}) => {
  const {register} = useFormContext()
  return (
    <input
    id={name}
      className={`
      ${!xsmall && !small && "w-full text-lg p-4"}
      ${small && "px-4 py-3 w-full text-lg"}
      ${xsmall && "p-2 text-base w-5/6"}
          placeholder-neutral-600
          bg-black 
          border-2
          border-neutral-800 
          rounded-md
          outline-none
          text-white
          focus:border-sky-500
          focus:border-2
          transition
          disabled:bg-neutral-900
          disabled:opacity-70
          disabled:cursor-not-allowed
        `}
        {...register(name)}
        {...inputAtributes}
    />
  );
};

export default Input;
