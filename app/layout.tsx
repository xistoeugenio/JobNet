import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastProvider } from "@/provider/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JobNet",
  description:
    "Join us on this exciting journey as we revolutionize the way you search, apply, and track your job applications. Get started with JobNet today and embark on a future full of possibilities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body
          className={
            inter.className + " h-screen flex items-center justify-center"
          }
        >
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
