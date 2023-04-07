import Input from "../inputs/Input";
import SelectInput from "../inputs/SelectInput";
import { ErrorMessage } from "./ErrorMessage";
import { InputHTMLAttributes } from "react";

interface jobInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  withOptions?: boolean;
  options?: string[];
}

const JobInput = ({ name, withOptions, options, ...props }: jobInputProps) => {
  if (withOptions) {
    return <SelectInput options={options} name={name} x_small />;
  } else {
    return (
      <div className="w-full flex flex-col items-center">
        <Input name={name} xsmall {...props} />
        <ErrorMessage field={name} />
      </div>
    );
  }
};

export default JobInput;
