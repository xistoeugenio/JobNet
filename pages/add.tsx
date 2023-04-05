import Input from "@/components/Input";
import style from "../components/add/add.module.scss"
import TextArea from "@/components/add/TextArea";
import Button from "@/components/Button";

const Add = () => {
  return (
    <div className={style.addContainer}>
      <div className={style.second}>
        <div className=" flex flex-1 flex-col items-center justify-around border-r-2 box-border p-2">
          <Input x_small placeholder="Title"/>
          <Input x_small placeholder="Company"/>
          <Input x_small placeholder="Location(optional)" />
          <Input x_small placeholder="Data applied"/>
          <Input x_small placeholder="Offer sallary"/>
          <Input x_small placeholder="Current Status"/>
          <Input x_small placeholder="Job Url"/>
          <Button label="Save" outline />
        </div>
        <div className=" flex-1 box-border p-2">
          <TextArea placeholder="Add the full job description here (optional)"/>
        </div>
      </div>
    </div>
  );
};

export default Add;
