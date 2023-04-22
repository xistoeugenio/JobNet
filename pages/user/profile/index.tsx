import styles from "../../../styles/home.module.scss";
import useCurrentUser from "@/hooks/useCurrentUser";
import Profile from "../../../components/user/Profile";
import HeaderProfile from "@/components/header/HeaderProfile";
import React, { useState } from "react";
import useCropImage from "@/hooks/useCropImage";
import { ClipLoader } from "react-spinners";

const CropModal = React.lazy(() => import("@/components/modals/CropModal"));

export default function User() {
  const { isOpen } = useCropImage();
  const { isLoading } = useCurrentUser();
  return (
    <>
      {isLoading ? (
          <ClipLoader color="lightblue" size={80} />
          ) : (
        <div className={styles.homeContainer}>
          <HeaderProfile/>
          <Profile />
          {isOpen && (
            // Load the CropModal component dynamically
            <React.Suspense
              fallback={
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-900 bg-opacity-80"></div>
              }
            >
              <CropModal />
            </React.Suspense>
          )}
        </div>
      )}
    </>
  );
}
