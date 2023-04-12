import { useFormContext } from "react-hook-form";
import style from "./add.module.scss";

interface TextAreaProps {
  name: string;
  placeholder: string;
  disabled?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({ name, placeholder, disabled }) => {
  const { register } = useFormContext();
  return (
    <textarea
      disabled={disabled}
      className={style.textArea}
      {...register(name)}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
