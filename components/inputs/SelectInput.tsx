interface SelectInputProps {
  small?: boolean;
  x_small?: boolean;
  options?: string[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  small,
  x_small,
  options,
  onChange,
}) => {
  return (
    <select
      onChange={onChange}
      name=""
      id=""
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
         cursor-pointer
        disabled:bg-neutral-900
        disabled:opacity-70
        disabled:cursor-not-allowed
  `}
    >
      {options?.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;