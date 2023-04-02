import JobPreview from "../JobPreview";
import { jobs_applied } from "./dummyList";

const ListJobs = () => {
  return (
    <div className=" bg-neutral-950 flex-1 rounded-b-md">
      {jobs_applied.map((job, index) => (
        <JobPreview 
        key={index} 
        title={job.Title} 
        company_name={job.company_name}
        current_status={job.current_status}
        />
      ))}
    </div>
  );
};

export default ListJobs;
