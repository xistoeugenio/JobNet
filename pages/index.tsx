import Header from "@/components/header/Header";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
    </div>
  );
}
