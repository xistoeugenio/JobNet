interface InputsProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  small?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputsProps> = ({
  placeholder,
  value,
  type,
  disabled,
  small,
  onChange,
}) => {
  return (
    <input
      disabled={disabled}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
      className={`
          w-full
          text-lg 
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
          ${small ? "px-4 py-3" : "p-4"}
        `}
    />
  );
};

export default Input;
