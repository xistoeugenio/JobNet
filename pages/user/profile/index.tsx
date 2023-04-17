import styles from "../../../styles/home.module.scss";
import useCurrentUser from "@/hooks/useCurrentUser";
import Profile from "../../../components/user/Profile";
import HeaderProfile from "@/components/header/HeaderProfile";
import React, { useState } from "react";
import useCropImage from "@/hooks/useCropImage";

const CropModal = React.lazy(() => import("@/components/modals/CropModal"));

export default function User() {
  const { isOpen } = useCropImage();
  return (
    <div className={styles.homeContainer}>
      <HeaderProfile name="Xisto Eugenio" />
      <Profile />
      {isOpen && (
        // Load the CropModal component dynamically
        <React.Suspense fallback={<div>Loading...</div>}>
          <CropModal />
        </React.Suspense>
      )}
    </div>
  );
}
