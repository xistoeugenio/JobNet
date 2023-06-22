import { ChangeEvent, useState } from "react";
import { useFormContext } from "react-hook-form";
import { toast } from "react-hot-toast";

import { BiLinkExternal } from "react-icons/bi";
import { BsFiletypePdf } from "react-icons/bs";

interface ResumeProps {
  resume?: string;
}

const Resume: React.FC<ResumeProps> = ({ resume }) => {
  const [fileName, setFileName] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files instanceof FileList) {
      const file = e.target.files[0];
      if (file?.type !== "application/pdf") {
        e.target.value = "";
        toast.error("This resume file must be in PDF format");
        setFileName("");
      } else {
        setFileName(e.target.files[0]?.name);
      }
    }
  };

  const { register } = useFormContext();

  return (
    <div className=" flex w-[50%] justify-center items-center overflow-y-hidden">
      {resume ? (
        <div className=" w-full h-full flex flex-col items-center justify-center gap-5 border-green-500 border-2 rounded-md">
          <BsFiletypePdf color="red" size={90} />
          <a className="flex items-center gap-1 text-green-500 font-semibold" href={resume} target="_blank">
            resume<BiLinkExternal />
          </a>
        </div>
      ) : (
        <label
          htmlFor="resume"
          className="w-full h-full flex items-center justify-center border-dashed border-neutral-500 border-4 cursor-pointer"
        >
          <input
            className="w-0 h-0"
            id="resume"
            {...register("resume")}
            type="file"
            onChange={onChange}
          />
          <span className="text-neutral-500 text-lg font-bold">
            {fileName || "Please select your resume file"}
          </span>
        </label>
      )}
    </div>
  );
};

export default Resume;
