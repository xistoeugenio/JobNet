import Input from "@/components/Input";
import style from "../components/add/add.module.scss";
import TextArea from "@/components/add/TextArea";
import Button from "@/components/Button";
import SelectInput from "../components/SelectInput";

const Add = () => {
  const workType = ["Remote", "In person", "Flexible"];
  const status = ["Applied","Interviewing", "Offered", "Accepted", "Rejected", "Withdrawn"]
  return (
    <div className={style.addContainer}>
      <div className={style.second}>
        <div className=" flex flex-1 flex-col items-center justify-around box-border p-2">
          <Input x_small placeholder="Title" />
          <Input x_small placeholder="Company" />
          <Input x_small placeholder="Location(optional)" />
          <SelectInput x_small options={workType} />
          <Input x_small placeholder="Offer sallary" />
          <SelectInput x_small options={status}/>
          <Input x_small placeholder="Job Url" />
          <Button label="Save" outline />
        </div>
        <div className=" flex-1 box-border p-3">
          <TextArea placeholder="Add the full job description here (optional)" />
        </div>
      </div>
    </div>
  );
};

export default Add;
