import SelectInput from "../inputs/SelectInput";
import { InputHTMLAttributes } from "react";
import InputValidator from "../inputs/InputValidator";

interface jobInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  withOptions?: boolean;
  options?: string[];
}

const JobInput = ({
  name,
  withOptions,
  options,
  disabled,
  defaultValue,
  ...props
}: jobInputProps) => {
  if (withOptions) {
    return (
      <SelectInput
        options={options}
        name={name}
        x_small
        disabled={disabled}
        defaultValue={defaultValue}
      />
    );
  } else {
    return (
      <InputValidator
        name={name}
        xsmall
        disabled={disabled}
        defaultValue={defaultValue}
        {...props}
      />
    );
  }
};

export default JobInput;
