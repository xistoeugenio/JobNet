import { useState } from "react";
import Checkbox from "./checkbox/Checkbox";
import Resume from "./Resume";
import TextArea from "./TextArea";

interface DescriptionProps {
  description?: string;
  resume?: string
  disabled?: boolean;
}

const DescriptionContainer: React.FC<DescriptionProps> = ({
  description,
  resume,
  disabled,
}) => {
  const [currentField, setCurrentField] = useState("Description");

  return (
    <div className="h-full">
      <div className="h-full flex flex-col items-center gap-5">
        <Checkbox
          setCurrentField={setCurrentField}
          currentField={currentField}
        />
        {currentField === "Resume" ? (
          <Resume resume={resume}/>
        ) : (
          <TextArea
            name="jobDescription"
            placeholder="This is your description"
            value={description}
            disabled={disabled}
          />
        )}
      </div>
    </div>
  );
};

export default DescriptionContainer;
