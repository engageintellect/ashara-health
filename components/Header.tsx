"use client";

import { useState, useEffect } from "react";
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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(true);

  // Simple theme handling - client-only
  useEffect(() => {
    // Check if header has already animated in this session
    const headerAnimated = localStorage.getItem("headerAnimated");
    if (headerAnimated === "true") {
      setHasAnimated(true);
    } else {
      setHasAnimated(false);
      setTimeout(() => {
        setHasAnimated(true);
        localStorage.setItem("headerAnimated", "true");
      }, 1500);
    }

    // Simple theme detection
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      const darkMode = savedTheme === "true";
      setIsDarkMode(darkMode);
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(systemDark);
      if (systemDark) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
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
      <motion.div
        variants={containerVariants}
        initial={hasAnimated ? "visible" : "hidden"}
        animate="visible"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex h-16 items-center justify-between">
          <motion.a
            variants={navItemVariants}
            href="/"
            aria-label={`${site.brand} — Home`}
            className="flex items-center gap-2 font-semibold tracking-tight text-stone-900 dark:text-stone-100"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 dark:bg-teal-700 text-white font-bold">
              A
            </span>
            <span className="text-lg">{site.brand.split(" ")[0]} Health</span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.nav
            variants={containerVariants}
            initial={hasAnimated ? "visible" : "hidden"}
            animate="visible"
            className="hidden md:flex items-center gap-6"
            aria-label="Primary"
          >
            {NAV.map((item, index) => (
              <motion.a
                key={item.href}
                variants={navItemVariants}
                custom={index}
                href={item.href}
                className="text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 focus-visible:rounded"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.button
              variants={navItemVariants}
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
            </motion.button>
            <motion.a
              variants={navItemVariants}
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-teal-600 dark:bg-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 dark:hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
            >
              Start Journey
            </motion.a>
          </motion.nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              variants={navItemVariants}
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
            </motion.button>
            <motion.button
              variants={navItemVariants}
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
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden border-t border-stone-200 dark:border-stone-700 bg-white/95 dark:bg-stone-900/95 backdrop-blur-sm"
          >
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
          </motion.div>
        )}
        {children}
      </motion.div>
    </header>
  );
}
