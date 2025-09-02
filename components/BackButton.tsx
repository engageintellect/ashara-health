"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BackButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export default function BackButton({
  href = "/",
  label = "← Back to Home",
  className = "mb-6",
}: BackButtonProps) {
  const pathname = usePathname();

  // Don't show back button on home page
  if (pathname === "/") {
    return null;
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-4 pb-0">
      <Link href={href}>
        <Button
          variant="outline"
          className={`${className} border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700 hover:text-stone-900 dark:hover:text-stone-100 focus-visible:ring-teal-700`}
        >
          {label}
        </Button>
      </Link>
    </div>
  );
}
