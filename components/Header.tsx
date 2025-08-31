"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import site from "@/content/site.json";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "What We Treat", href: "#services" },
  { label: "Memberships", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

interface HeaderProps {
  id?: string;
  role?: string;
  className?: string;
  children?: React.ReactNode;
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp("(?:^|; )" + name + "=([^;]*)")
  );
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(
  name: string,
  value: string,
  maxAgeSeconds = 60 * 60 * 24 * 365
) {
  if (typeof document === "undefined") return;
  const isSecure =
    typeof location !== "undefined" && location.protocol === "https:";
  const expires = new Date(Date.now() + maxAgeSeconds * 1000).toUTCString();
  const cookie = `${name}=${encodeURIComponent(
    value
  )}; Path=/; Max-Age=${maxAgeSeconds}; Expires=${expires}; SameSite=Lax${
    isSecure ? "; Secure" : ""
  }`;
  document.cookie = cookie;
}

export default function Header({ id, role, className, children }: HeaderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Load theme preference on mount: cookie -> localStorage -> system
  useEffect(() => {
    const cookieTheme = getCookie("theme");
    if (cookieTheme === "dark" || cookieTheme === "light") {
      const dark = cookieTheme === "dark";
      setIsDarkMode(dark);
      dark
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
      return;
    }
    const savedTheme =
      typeof window !== "undefined" ? localStorage.getItem("darkMode") : null;
    if (savedTheme) {
      const darkMode = savedTheme === "true";
      setIsDarkMode(darkMode);
      darkMode
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    } else {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(systemDark);
      if (systemDark) document.documentElement.classList.add("dark");
    }
  }, []);

  // Persist preference when dark mode changes
  useEffect(() => {
    // Cookie takes precedence for SSR and refreshes
    setCookie("theme", isDarkMode ? "dark" : "light");
    // Keep localStorage for backward compatibility
    localStorage.setItem("darkMode", isDarkMode.toString());

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = async () => {
    const next = !isDarkMode;
    // Apply immediately so UI updates without waiting for effects
    if (next) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setCookie("theme", next ? "dark" : "light");
    localStorage.setItem("darkMode", String(next));
    // Also set cookie server-side so SSR picks it up reliably
    try {
      await fetch("/api/theme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ theme: next ? "dark" : "light" }),
        credentials: "same-origin",
        cache: "no-store",
      }).catch(() => {});
      // Re-render server components so SSR uses the latest cookie
      router.refresh();
    } catch {}
    setIsDarkMode(next);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      id={id}
      role={role}
      className={[
        "sticky top-0 z-50 w-full border-b border-stone-200/80 dark:border-stone-800/60",
        "bg-white/80 dark:bg-stone-900/70 backdrop-blur",
        "supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-stone-900/60",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#home"
            aria-label={`${site.brand} — Home`}
            className="flex items-center gap-2 font-semibold tracking-tight text-stone-900 dark:text-stone-100"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-teal-800 dark:bg-teal-700 text-white font-bold">
              A
            </span>
            <span className="text-lg">{site.brand.split(" ")[0]} Health</span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Primary"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 focus-visible:rounded"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="inline-flex items-center justify-center rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 px-3 py-2 text-sm font-semibold text-stone-900 dark:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-teal-800 dark:bg-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-900 dark:hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
            >
              Start Journey
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="inline-flex items-center justify-center rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 p-2 text-stone-900 dark:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 p-2 text-stone-900 dark:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-stone-200 dark:border-stone-700 bg-white/95 dark:bg-stone-900/95 backdrop-blur-sm">
            <nav className="px-4 py-4 space-y-3" aria-label="Mobile">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-800 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center mt-4 rounded-xl bg-teal-800 dark:bg-teal-700 px-4 py-3 text-base font-semibold text-white hover:bg-teal-900 dark:hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
              >
                Start Journey
              </a>
            </nav>
          </div>
        )}
        {children}
      </div>
    </header>
  );
}
