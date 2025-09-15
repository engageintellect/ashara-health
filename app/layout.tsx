import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashara Health & Wellness",
  description:
    "Whole-person preventive care with compassionate, precision-guided wellness",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={[
          inter.className,
          "min-h-screen bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-100 antialiased",
        ].join(" ")}
      >
        <Header />
        <BackButton />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
