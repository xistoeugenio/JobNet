import Header from "@/components/header/Header";
import styles from "../styles/home.module.scss";
import ListJobs from "@/components/listJobs/ListJobs";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <ListJobs />
    </div>
  );
}
