import { useFormContext } from "react-hook-form";
import style from "./add.module.scss";

interface TextAreaProps {
  name: string;
  placeholder: string;
}

const TextArea: React.FC<TextAreaProps> = ({ name, placeholder }) => {
  const { register } = useFormContext();
  return (
    <textarea
      className={style.textArea}
      {...register(name)}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
