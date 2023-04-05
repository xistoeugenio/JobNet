import style from "./add.module.scss";
interface TextAreaProps {
  placeholder: string;
}

const TextArea: React.FC<TextAreaProps> = ({ placeholder }) => {
  return (
    <div className="overflow-y-hidden box-border pl-2 w-full h-full border-2">
      <textarea
        placeholder={placeholder}
        name=""
        id=""
        className={style.textArea}
      ></textarea>
    </div>
  );
};

export default TextArea;
