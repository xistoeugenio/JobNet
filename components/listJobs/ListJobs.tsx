import useJobs from "@/hooks/usejobs.";
import JobPreview from "../JobPreview";
import styles from "../../styles/home.module.scss";

const ListJobs = () => {
  const { data: jobs = [] } = useJobs();
  return (
    <div className={styles.listJobsContainer}>
      {jobs.map((job: Record<string, any>) => (
        <JobPreview
          key={job.id}
          title={job.title}
          companyName={job.companyName}
          currentStatus={job.currentStatus}
          jobUrl={job.jobUrl?.length > 0 && job.jobUrl}
          updatedAt={job.updatedAt}
        />
      ))}
    </div>
  );
};

export default ListJobs;
