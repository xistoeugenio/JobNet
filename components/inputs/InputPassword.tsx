import { InputHTMLAttributes, useState } from "react";
import { useFormContext } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface InputsProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  small?: boolean;
  xsmall?: boolean;
}

const InputPassword: React.FC<InputsProps> = ({
  small,
  xsmall,
  name,
  ...inputAtributes
}) => {
  const { register } = useFormContext();
  const [isPassword, setIsPassword] = useState(true);

  const onToggle = () => {
    setIsPassword(!isPassword);
  };
  return (
    <div className="w-full flex gap-4 relative">
      <input
        type={isPassword ? "password" : "text"}
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
      <button
        className="absolute right-4 top-1/4"
        onClick={onToggle}
        type="button"
      >
        {isPassword ? (
          <AiOutlineEyeInvisible color="white" size={25} />
        ) : (
          <AiOutlineEye color="white" size={25} />
        )}
      </button>
    </div>
  );
};

export default InputPassword;
