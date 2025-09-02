"use client";

import site from "@/content/site.json";
import { Icon } from "@iconify/react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "What We Treat", href: "#services" },
  { label: "Memberships", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-semibold tracking-tight text-stone-900 dark:text-stone-100">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-teal-800 dark:bg-teal-700 text-white font-bold">
                A
              </span>
              <span>{site.brand}</span>
            </div>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 max-w-sm">
              Transforming healthcare through prevention-first approach. East
              meets West, integrating ancient wisdom with modern therapies.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://instagram.com/asharahealth"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:text-teal-800 dark:hover:text-teal-300 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Icon icon="mdi:instagram" className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/asharahealth"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:text-teal-800 dark:hover:text-teal-300 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Icon icon="mdi:facebook" className="w-5 h-5" />
              </a>
            </div>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-2 text-sm">
            {NAV.map((item) => (
              <a
                key={`f-${item.href}`}
                href={item.href}
                className="w-fit rounded text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/privacy"
              className="w-fit rounded text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="w-fit rounded text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
            >
              Terms & Conditions
            </a>
          </nav>
          <div className="text-sm text-stone-600 dark:text-stone-400 space-y-2">
            <p>
              &copy; {new Date().getFullYear()} {site.brand}. All rights
              reserved.
            </p>
            <div className="space-y-1">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  site.address
                )}`}
                target="_blank"
                rel="noreferrer"
                className="block w-fit hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                {site.address}
              </a>
              <a
                href={`tel:${site.phone_href}`}
                className="block w-fit hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                {site.phone_display}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="block w-fit hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
