interface InputsProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  small?: boolean;
  x_small?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputsProps> = ({
  placeholder,
  value,
  type,
  disabled,
  required,
  small,
  x_small,
  onChange,
}) => {
  return (
    <input
      disabled={disabled}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
      required={required}
      className={`
      ${x_small! && small! && "w-full text-lg p-4"}
      ${small && "px-4 py-3 w-full text-lg"}
      ${x_small && "p-2 text-base w-5/6"}
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
    />
  );
};

export default Input;
