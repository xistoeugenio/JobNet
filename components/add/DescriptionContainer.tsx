import { useState } from "react";
import Checkbox from "./checkbox/Checkbox";
import Resume from "./Resume";
import TextArea from "./TextArea";

interface DescriptionProps {
  description?: string;
  resume?: string;
  disabled?: boolean;
}

const DescriptionContainer: React.FC<DescriptionProps> = ({
  description,
  resume,
  disabled,
}) => {
  const [resumeChecked, setResumeChecked] = useState(true);

  return (
    <div className="h-full">
      <div className="h-full flex flex-col items-center gap-5">
        <Checkbox
          setResumeChecked={setResumeChecked}
          resumeChecked={resumeChecked}
        />
        <div className="flex-1 w-full relative overflow-hidden">
          <div
            className={`flex absolute w-[200%] h-full ${
              resumeChecked ? "left-0" : "right-0"
            }`}
            style={{
              left: resumeChecked ? "-100%" : "0%",
              transition: "0.5s ease",
            }}
          >
            <Resume resume={resume} />
            <TextArea
              name="jobDescription"
              placeholder="This is your description"
              value={description}
              disabled={disabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionContainer;
