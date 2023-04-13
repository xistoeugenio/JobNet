import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/router";
import { BiLinkExternal } from "react-icons/bi";

interface JobPreviewProps {
  title: string;
  companyName: string;
  currentStatus: string;
  jobUrl?: string;
  updatedAt: string;
  jobId: string;
}

const JobPreview: React.FC<JobPreviewProps> = ({
  title,
  companyName,
  currentStatus,
  jobUrl,
  updatedAt,
  jobId,
}) => {
  const newUpdateAt = formatDistanceToNowStrict(new Date(updatedAt));

  const goToJobUrl = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!jobUrl) {
      event.preventDefault();
    } else {
      event.stopPropagation();
    }
  };

  const router = useRouter();

  const goToEdit = () => {
    router.push(`/jobs/edit/${jobId}`);
  };

  return (
    <div
      className="bg-neutral-800 h-10 flex justify-between items-center box-border px-3 m-3 rounded-xl cursor-pointer hover:bg-neutral-900"
      onClick={goToEdit}
    >
      <span className="bg-emerald-900 w-1/3 sm:w-1/4 text-neutral-300 rounded-md px-1 overflow-hidden whitespace-nowrap text-ellipsis text-sm sm:text-base">
        {title}
      </span>
      <span className="w-1/5 text-cyan-600 sm:text-lg overflow-hidden whitespace-nowrap text-ellipsis">
        {companyName}
      </span>
      <span className="w-1/5 text-neutral-400 text-xs sm:text-sm">
        {currentStatus}
      </span>
      <span className=" w-1/6 text-neutral-500 hidden sm:block">
        {newUpdateAt}
      </span>
      <a
        href={jobUrl || ""}
        target="_blank"
        onClick={goToJobUrl}
        className={jobUrl ? "cursor-pointer" : "cursor-not-allowed"}
      >
        <BiLinkExternal
          className={jobUrl ? "text-green-400 hover:text-green-200" : " text-neutral-700"}
          size='18px'
        />
      </a>
    </div>
  );
};

export default JobPreview;
