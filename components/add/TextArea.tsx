import { useFormContext } from "react-hook-form";
import style from "./add.module.scss";

interface TextAreaProps {
  name: string;
  placeholder: string;
  disabled?: boolean;
  value?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  placeholder,
  disabled,
  value,
}) => {
  const { register } = useFormContext();
  return (
    <textarea
      disabled={disabled}
      className={style.textArea}
      {...register(name)}
      placeholder={placeholder}
      defaultValue={value}
    />
  );
};

export default TextArea;
