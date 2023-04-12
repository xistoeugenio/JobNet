import useJobs from "@/hooks/usejobs.";
import JobPreview from "../JobPreview";
import styles from "../../styles/home.module.scss";
import { useRouter } from "next/router";
import { useCallback } from "react";

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
          jobId={job.id}
        />
      ))}
    </div>
  );
};

export default ListJobs;
