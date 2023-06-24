import {
  format,
  isToday,
  isYesterday,
  isWithinInterval,
  isThisWeek,
  isThisMonth,
  isThisYear,
} from "date-fns";
import { groupBy } from "lodash";
import JobPreview from "../JobPreview";
import React from "react";
import useJobs from "@/hooks/usejobs.";
import styles from "../../styles/home.module.scss";
import InitialMessage from "../InitialMessage";

const ListJobs = () => {
  const { data: jobs = [], isLoading } = useJobs();

  const groupJobsByDate = (jobs: any) => {
    return groupBy(jobs, (job: any) => {
      const updatedAt = new Date(job.updatedAt);
      if (isToday(updatedAt)) {
        return "Today";
      } else if (isYesterday(updatedAt)) {
        return "Yesterday";
      } else if (
        isWithinInterval(updatedAt, {
          start: new Date().getTime() - 7 * 24 * 60 * 60 * 1000, // 7 days ago
          end: new Date(),
        })
      ) {
        return "Previous 7 Days";
      } else if (isThisMonth(updatedAt)) {
        return "This month";
      } else if (isThisYear(updatedAt)) {
        return "This year";
      } else {
        // You can add more conditions for different date ranges if needed
        return "Earlier dates";
      }
    });
  };

  const groupedJobs = groupJobsByDate(jobs);

  return (
    <div
      className={styles.listJobsContainer}
      style={{ opacity: isLoading ? "0" : "1" }}
    >
      {Object.entries(groupedJobs).map(([category, jobs]) => (
        <React.Fragment key={category}>
          <h2 className="text-neutral-400 ml-4 font-semibold">{category}</h2>
          {jobs.map((job) => (
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
        </React.Fragment>
      ))}

      {!isLoading && Object.values(groupedJobs).flat().length === 0 && (
        <InitialMessage />
      )}
    </div>
  );
};

export default ListJobs;
