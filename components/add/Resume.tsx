import { ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "../inputs/ErrorMessage";
import { toast } from "react-hot-toast";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";


interface ResumeProps {
  resume?: string;
}

const Resume: React.FC<ResumeProps> = ({ resume }) => {

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
    <div className="flex-1 flex justify-center items-center w-full overflow-hidden custom-scrollbar">
      {resume ? (
        <div className="w-full h-full">
          <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.7.107/pdf.worker.min.js">
            <Viewer fileUrl={resume} theme="dark" />
          </Worker>
        </div>
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
