import styles from "./checkbox.module.scss";

interface NavbarProps {
  setCurrentField: React.Dispatch<React.SetStateAction<string>>;
  currentField: string;
}

const Checkbox: React.FC<NavbarProps> = ({ setCurrentField, currentField }) => {
  const onToggle = () => {
    if (currentField === "Description") {
      setCurrentField("Resume");
    } else {
      setCurrentField("Description");
    }
  };

  return (
    <div className={styles.check}>
      <label onClick={onToggle}>
        <div className="w-1/2 text-neutral-500 font-medium flex items-center justify-center">
          Description
        </div>
        <div className="w-1/2 text-neutral-500 font-medium flex items-center justify-center">
          Resume
        </div>
        <div
          className={styles.switch}
          style={{
            left: `${
              currentField === "Description" ? "6px" : "calc(50% - 6px)"
            }`,
          }}
        >
          {currentField}
        </div>
      </label>
    </div>
  );
};

export default Checkbox;
