import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import DeleteModal from "@/components/modals/DeleteModal";
import Head from "next/head";

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>JobNet</title>
      </Head>
      <Toaster />
      <div className="h-screen flex items-center justify-center">
        <LoginModal />
        <RegisterModal />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
