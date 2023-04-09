import { ErrorMessage } from "./ErrorMessage";
import Input from "./Input";
import { InputHTMLAttributes } from "react";

interface jobInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  withOptions?: boolean;
  options?: string[];
  xsmall?: boolean;
  small?: boolean;
}

const InputValidator: React.FC<jobInputProps> = ({ name, ...props }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <Input name={name} {...props} />
      <ErrorMessage field={name} />
    </div>
  );
};

export default InputValidator;
