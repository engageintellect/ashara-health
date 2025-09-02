import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { cookies } from "next/headers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import "./globals.css";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashara Health & Wellness",
  description:
    "Whole-person preventive care with compassionate, precision-guided wellness",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Read theme cookie on the server to set initial class and avoid flash on refresh
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme")?.value;
  const initialHtmlClass = themeCookie === "dark" ? "dark" : undefined;

  return (
    <html lang="en" suppressHydrationWarning className={initialHtmlClass}>
      <head>
        {/* Prevent dark mode flash: cookie > localStorage > system. Do not undo SSR state unless needed. */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "(()=>{try{const el=document.documentElement;const has=el.classList.contains('dark');const getCookie=(n)=>{const m=document.cookie.match(new RegExp('(?:^|; )'+n+'=([^;]*)'));return m?decodeURIComponent(m[1]):null};const cookieTheme=getCookie('theme');const ls=localStorage.getItem('darkMode');const prefers=window.matchMedia('(prefers-color-scheme: dark)').matches;let enabled=null;if(cookieTheme==='dark')enabled=true;else if(cookieTheme==='light')enabled=false;else if(ls!==null)enabled=(ls==='true');else enabled=prefers;if(enabled===true&&!has){el.classList.add('dark')}else if(enabled===false&&has){el.classList.remove('dark')}}catch(e){}})();",
          }}
        />
      </head>
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
