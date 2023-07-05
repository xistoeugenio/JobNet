'use client'

import { Button } from "@mui/material";
import { BiReset } from "react-icons/bi";
import GoBackButton from "../Buttons/GoBackButton";

interface HeaderEdit {
  onResetClick: () => void;
  jobName?: string;
}

const HeaderEdit: React.FC<HeaderEdit> = ({ onResetClick, jobName }) => {

  return (
    <div className="bg-neutral-950 w-full h-16 flex items-center justify-between px-4 rounded-md border border-gray-500">
      <GoBackButton/>
      {jobName ? (
        <span className="hidden text-lg text-neutral-500 sm:block">
          {`Updating : '${jobName}'`}
        </span>
      ):(
        <h2 className="hidden text-xl text-neutral-400 sm:block">Add new job</h2>
      )}
      <Button
        variant="outlined"
        color="warning"
        startIcon={<BiReset />}
        onClick={onResetClick}
      >
        Reset
      </Button>
    </div>
  );
};

export default HeaderEdit;
