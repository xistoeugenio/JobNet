import Input from "@/components/inputs/Input";
import style from "../components/add/add.module.scss";
import TextArea from "@/components/add/TextArea";
import Button from "@/components/Button";
import SelectInput from "../components/inputs/SelectInput";
import { useState } from "react";

const Add = () => {
  const workModeOptions = ["Remote", "In-person", "Hybrid", "Flexible"];
  const currentStatusOptions = [
    "Applied",
    "Interviewing",
    "Offered",
    "Accepted",
    "Rejected",
    "Withdrawn",
  ];

  const [currentStatus, setCurrentStatus] = useState(currentStatusOptions[0]);
  const [workMode, setWorkMode] = useState(workModeOptions[0]);
  return (
    <div className={style.addContainer}>
      <form
        className={style.second}
        onSubmit={() => {
          console.log("form submit worked");
        }}
      >
        <div className=" flex flex-1 flex-col items-center justify-around box-border p-2">
          <Input x_small placeholder="Title"/>
          <Input x_small placeholder="Company"/>
          <SelectInput
            x_small
            options={workModeOptions}
            onChange={(e) => setWorkMode(e.target.value)}
          />
          <Input x_small placeholder="Offer sallary (optional)" />
          <SelectInput
            x_small
            options={currentStatusOptions}
            onChange={(e) => setCurrentStatus(e.target.value)}
          />
          <Input x_small placeholder="Job Url (optional)" />
          <Button label="Save" outline submit />
        </div>
        <div className=" flex-1 box-border p-3">
          <TextArea placeholder="Add the full job description here (optional)" />
        </div>
      </form>
    </div>
  );
};

export default Add;
