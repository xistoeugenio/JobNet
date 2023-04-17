import styles from "../../../styles/home.module.scss";
import useCurrentUser from "@/hooks/useCurrentUser";
import Profile from "../../../components/user/Profile";
import HeaderProfile from "@/components/header/HeaderProfile";
import CropModal from "@/components/modals/CropModal";
import useCropImage from "@/hooks/useCropImage";

export default function Home() {
  const { data: currentUser, isLoading } = useCurrentUser();
  return (
    <div className={styles.homeContainer}>
      <CropModal />
      <HeaderProfile name="Xisto Eugenio" />
      <Profile />
    </div>
  );
}
