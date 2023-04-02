import { RiDeleteBin7Line } from "react-icons/ri";

interface JobPreviewProps {
  name: string;
}

const JobPreview: React.FC<JobPreviewProps> = ({ name }) => {
  return (
    <div
      className="
     bg-neutral-800 h-10
     flex justify-between items-center
     box-border px-6 m-3 
     rounded-xl"
    >
      <div>{name}</div>
      <RiDeleteBin7Line />
    </div>
  );
};

export default JobPreview;
