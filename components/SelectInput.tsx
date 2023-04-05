interface SelectInputProps {
  small?: boolean;
  x_small?: boolean;
  options?: string[];
}

const SelectInput: React.FC<SelectInputProps> = ({
  small,
  x_small,
  options,
}) => {
  return (
    <select
      name=""
      id=""
      className={`
    w-full
    placeholder-neutral-600
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
    cursor-pointer
    disabled:bg-neutral-900
    disabled:opacity-70
    disabled:cursor-not-allowed
    ${small ? "px-4 py-3" : "p-4"}
    ${x_small && "p-2 text-base w-5/6"}
  `}
    >
      {options?.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  );
};

export default SelectInput;
