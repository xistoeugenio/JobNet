import Header from "@/components/header/Header";
import styles from "../styles/home.module.scss";
import ListJobs from "@/components/listJobs/ListJobs";
import useCurrentUser from "@/hooks/useCurrentUser";
import HomePage from "@/components/HomePage";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const { data: currentUser, isLoading } = useCurrentUser();
  const hasLoadingChanged = useRef(false);
  const [loadHeader, setLoadHeader]= useState(false)

  //this is responsible to load the Header after 1 sec
  useEffect(() => {
    if (!isLoading && !hasLoadingChanged.current) {
      const timer = setTimeout(() => {
        setLoadHeader(true)
        hasLoadingChanged.current = true;
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      <div className={styles.homeContainer}>
        <Header loadHeader={loadHeader}/>
        {currentUser ? <ListJobs /> : <HomePage />}
      </div>
    </>
  );
}
