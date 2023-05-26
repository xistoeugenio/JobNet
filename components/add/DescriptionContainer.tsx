import { useState } from "react";
import Checkbox from "./checkbox/Checkbox";
import Resume from "./Resume";
import TextArea from "./TextArea";

const DescriptionContainer = () => {
  const [currentField, setCurrentField] = useState("Description");
  console.log(currentField)

  return (
    <div className="h-full">
      <div className="h-full flex flex-col items-center gap-5">
        <Checkbox setCurrentField={setCurrentField} currentField={currentField}/>
        {currentField === "Resume" ? (
          <Resume />
        ) : (
          <TextArea name="description" placeholder="This is your description" />
        )}
      </div>
    </div>
  );
};

export default DescriptionContainer;
