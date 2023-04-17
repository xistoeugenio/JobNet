import Image from "next/image";
import { BiBriefcase, BiCalendar } from "react-icons/bi";
import { useState, FormEvent, ChangeEvent } from "react";
import { toast } from "react-hot-toast";
import useCropImage from "@/hooks/useCropImage";
import InputFile from "../inputs/inputCrop/InputFile";

const InfoUser = () => {
  return (
    <div className="h-32 bg-neutral-950 flex items-center gap-3 p-2 rounded-md border-blue-500 border-2 sm:h-36">
      <div className="h-24 w-24 relative sm:w-32 sm:h-full">
        <Image
          className="rounded-md"
          fill
          alt="Avatar"
          src={"/images/placeholder.png"}
        />
      </div>
      <div className="h-full flex-1 flex flex-col justify-between text-sm sm:text-base">
        <div className="flex text-neutral-400">@xistoeugenio</div>
        <div className="text-cyan-600 flex items-center gap-2 ">
          <BiCalendar />
          <span>Joined March 2023</span>
        </div>
        <div className="text-yellow-600 flex items-center gap-2">
          <BiBriefcase />
          <span>jobs added : 13</span>
        </div>
        <InputFile />
      </div>
    </div>
  );
};

export default InfoUser;
