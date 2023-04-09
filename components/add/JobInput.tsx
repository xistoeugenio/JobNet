import SelectInput from "../inputs/SelectInput";
import { InputHTMLAttributes } from "react";
import InputValidator from "../inputs/InputValidator";

interface jobInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  withOptions?: boolean;
  options?: string[];
}

const JobInput = ({ name, withOptions, options, ...props }: jobInputProps) => {
  if (withOptions) {
    return <SelectInput options={options} name={name} x_small />;
  } else {
    return <InputValidator name={name} xsmall {...props} />;
  }
};

export default JobInput;
