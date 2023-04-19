import { ErrorMessage } from "./ErrorMessage";
import Input from "./Input";
import { InputHTMLAttributes } from "react";
import InputPassword from "./InputPassword";

interface jobInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  withOptions?: boolean;
  options?: string[];
  xsmall?: boolean;
  small?: boolean;
  password?: boolean;
}

const InputValidator: React.FC<jobInputProps> = ({
  name,
  password,
  ...props
}) => {
  return (
    <div className="w-full flex flex-col items-center">
      {password ? (
        <InputPassword name={name} {...props} />
      ) : (
        <Input name={name} {...props} />
      )}
      <ErrorMessage field={name} />
    </div>
  );
};

export default InputValidator;
