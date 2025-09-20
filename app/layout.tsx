import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import ChatBot from "@/components/ChatBot";
import { ThemeProvider } from "@/components/ThemeProvider";
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={[
          inter.className,
          "min-h-screen bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-100 antialiased",
        ].join(" ")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <BackButton />
          <main>{children}</main>
          <Footer />
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}
