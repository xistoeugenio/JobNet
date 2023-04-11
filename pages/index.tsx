import Header from "@/components/header/Header";
import styles from "../styles/home.module.scss";
import ListJobs from "@/components/listJobs/ListJobs";
import useCurrentUser from "@/hooks/useCurrentUser";
import HomePage from "@/components/HomePage";

export default function Home() {
  const { data: currentUser, isLoading } = useCurrentUser();
  return (
    <div className={styles.homeContainer}>
      <Header />
      {currentUser ? <ListJobs /> : <HomePage />}
    </div>
  );
}
