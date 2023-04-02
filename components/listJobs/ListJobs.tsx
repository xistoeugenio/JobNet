import JobPreview from "../JobPreview";
import { jobs_applied } from "./dummyList";

const ListJobs = () => {
  return (
    <div className=" bg-neutral-950 flex-1 rounded-b-md">
      {jobs_applied.map((job, index) => (
        <JobPreview key={index} name={job.Title} />
      ))}
    </div>
  );
};

export default ListJobs;
