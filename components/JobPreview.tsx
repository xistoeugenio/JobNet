import { BiLinkExternal } from "react-icons/bi";

interface JobPreviewProps {
  title: string;
  company_name: string;
  current_status: string;
}

const JobPreview: React.FC<JobPreviewProps> = ({
  title,
  company_name,
  current_status,
}) => {
  return (
    <div className="bg-neutral-800 h-10 flex justify-between items-center box-border px-3 m-3 rounded-xl">
      <span className="bg-emerald-900 w-1/3 sm:w-1/4 text-neutral-300 rounded-md px-1 overflow-hidden whitespace-nowrap text-ellipsis text-sm sm:text-base">
        {title}
      </span>
      <span className="w-1/5 text-cyan-600 sm:text-lg overflow-hidden whitespace-nowrap text-ellipsis">
        {company_name}
      </span>
      <span className="w-1/4 text-neutral-400 text-xs sm:text-sm">
        {current_status}
      </span>
      <span className="text-neutral-500 hidden sm:block">3 hours</span>
      <BiLinkExternal className="text-red-500" />
    </div>
  );
};

export default JobPreview;
