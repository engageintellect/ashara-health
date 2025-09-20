"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import site from "@/content/site.json";
import { motion } from "framer-motion";

const NAV = [
  { label: "Home", href: "/" },
  { label: "What We Treat", href: "#conditions" },
  { label: "Services", href: "#services" },
  { label: "Memberships", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

interface HeaderProps {
  id?: string;
  role?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Header({ id, role, className, children }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(() => {
    // Initialize from localStorage on first render
    if (typeof window !== 'undefined') {
      return localStorage.getItem("headerAnimated") === "true";
    }
    return false;
  });
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
    
    // Only run animation logic once on mount
    const headerAnimated = localStorage.getItem("headerAnimated");
    if (headerAnimated !== "true") {
      setHasAnimated(false);
      const timer = setTimeout(() => {
        setHasAnimated(true);
        localStorage.setItem("headerAnimated", "true");
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
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
        "bg-gradient-to-b from-stone-50/90 to-white/90 dark:from-stone-900/90 dark:to-stone-900/90 backdrop-blur",
        "supports-[backdrop-filter]:bg-gradient-to-b supports-[backdrop-filter]:from-stone-50/60 supports-[backdrop-filter]:to-white/60 dark:supports-[backdrop-filter]:from-stone-900/60 dark:supports-[backdrop-filter]:to-stone-900/60",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="/"
            aria-label={`${site.brand} — Home`}
            className="flex items-center gap-2 font-semibold tracking-tight text-stone-900 dark:text-stone-100"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 dark:bg-teal-700 text-white font-bold">
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
              {mounted && theme === 'dark' ? (
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
              className="inline-flex items-center justify-center rounded-xl bg-teal-600 dark:bg-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 dark:hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
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
              {mounted && theme === 'dark' ? (
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
                className="block w-full text-center mt-4 rounded-xl bg-teal-600 dark:bg-teal-700 px-4 py-3 text-base font-semibold text-white hover:bg-teal-700 dark:hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
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
