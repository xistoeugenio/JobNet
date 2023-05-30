import { ChangeEvent, useState } from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "../inputs/ErrorMessage";
import { toast } from "react-hot-toast";

const Resume = () => {
  const resume = false;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files instanceof FileList) {
      const file = e.target.files[0];
      if (file?.type !== "application/pdf") {
        e.target.value = "";
        toast.error("This resume file must be in PDF format");
      }
    }
  };

  

  const { register } = useFormContext();
  return (
    <div className="flex-1 flex justify-center items-center">
      {resume ? (
        <div>Resume</div>
      ) : (
        <>
          <input
            id="resume"
            {...register("resume")}
            type="file"
            onChange={onChange}
          />
          <ErrorMessage field="resume" />
        </>
      )}
    </div>
  );
};
export default Resume;
