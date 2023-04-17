import Image from "next/image";
import { BiBriefcase, BiCalendar } from "react-icons/bi";
import InputFile from "../inputs/inputCrop/InputFile";
import useCurrentUser from "@/hooks/useCurrentUser";
import { format } from "date-fns";
import { useMemo } from "react";

const InfoUser = () => {
  const { data: currentUser } = useCurrentUser();

  const createdAt = useMemo(() => {
    if (!currentUser?.createdAt) {
      return null;
    }

    return format(new Date(currentUser.createdAt), "MMMM yyyy");
  }, [currentUser?.createdAt]);

  return (
    <div className="h-32 bg-neutral-950 flex items-center gap-3 p-2 rounded-md border-blue-500 border-2 sm:h-36">
      <div className="h-24 w-24 relative sm:w-32 sm:h-full">
        <Image
          className="rounded-md"
          fill
          alt="Avatar"
          src={currentUser.image || "/images/placeholder.png"}
        />
      </div>
      <div className="h-full flex-1 flex flex-col justify-between text-sm sm:text-base">
        <div className="flex text-neutral-400">@{currentUser.username}</div>
        <div className="text-cyan-600 flex items-center gap-2 ">
          <BiCalendar />
          <span>Joined {createdAt}</span>
        </div>
        <div className="text-yellow-600 flex items-center gap-2">
          <BiBriefcase />
          <span>jobs added : {currentUser.jobsAdded}</span>
        </div>
        <InputFile />
      </div>
    </div>
  );
};

export default InfoUser;
