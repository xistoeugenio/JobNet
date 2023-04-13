import Header from "@/components/header/Header";
import styles from "../../../styles/home.module.scss";
import ListJobs from "@/components/listJobs/ListJobs";
import useCurrentUser from "@/hooks/useCurrentUser";
import Profile from "@/components/user/Profile";
import HeaderProfile from "@/components/header/HeaderProfile";
export default function Home() {
  const { data: currentUser, isLoading } = useCurrentUser();
  return (
    <div className={styles.homeContainer}>
      <HeaderProfile name="Xisto Eugenio"/>
      <Profile />
    </div>
  );
}
