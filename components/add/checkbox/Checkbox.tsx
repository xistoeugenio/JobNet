import styles from "./checkbox.module.scss";

interface NavbarProps {
  setResumeChecked: React.Dispatch<React.SetStateAction<boolean>>;
  resumeChecked: boolean;
}

const Checkbox: React.FC<NavbarProps> = ({ setResumeChecked, resumeChecked }) => {
  const onToggle = () => {
    setResumeChecked(!resumeChecked);
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
            left: `${resumeChecked ? "6px" : "calc(50% - 6px)"}`,
          }}
        >
          {resumeChecked ? 'Description': 'Resume'}
        </div>
      </label>
    </div>
  );
};

export default Checkbox;
