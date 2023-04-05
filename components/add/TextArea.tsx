import style from "./add.module.scss";
interface TextAreaProps {
  placeholder: string;
}

const TextArea: React.FC<TextAreaProps> = ({ placeholder }) => {
  return (
      <textarea
        placeholder={placeholder}
        name=""
        id=""
        className={style.textArea}
      ></textarea>
  );
};

export default TextArea;
