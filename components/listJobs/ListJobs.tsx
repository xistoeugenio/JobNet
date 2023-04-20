import useJobs from "@/hooks/usejobs.";
import JobPreview from "../JobPreview";
import styles from "../../styles/home.module.scss";
import InitialMessage from "../InitialMessage";

const ListJobs = () => {
  const { data: jobs = [], isLoading } = useJobs();

  return (
    <div
      className={styles.listJobsContainer}
      style={{ opacity: isLoading ? "0" : "1" }}
    >
      {jobs.length ? (
        jobs.map((job: Record<string, any>) => (
          <JobPreview
            key={job.id}
            title={job.title}
            companyName={job.companyName}
            currentStatus={job.currentStatus}
            jobUrl={job.jobUrl?.length > 0 && job.jobUrl}
            updatedAt={job.updatedAt}
            jobId={job.id}
          />
        ))
      ) : (
        <InitialMessage />
      )}
    </div>
  );
};

export default ListJobs;
