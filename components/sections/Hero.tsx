"use client";

import { Button } from "@/components/ui/button";
import { PhoneIcon, MailIcon } from "@/components/icons";
import site from "@/content/site.json";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-stone-50 dark:from-stone-900 to-white dark:to-stone-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-5xl">
              Elevating Preventive Care
            </h1>
            <p className="mt-4 text-lg text-stone-700 dark:text-stone-300 max-w-prose">
              Root-cause healing. Delivered with reverence.
            </p>
            <p className="mt-2 text-base text-stone-600 dark:text-stone-400 max-w-prose">
              Burnout. Hormonal shifts. Chronic symptoms. Fatigue that won't
              lift. At Ashara, we don't silence your body—we listen.
            </p>
            <p className="mt-2 text-base text-stone-600 dark:text-stone-400 max-w-prose">
              Our concierge wellness model blends regenerative therapies,
              advanced diagnostics, IV infusions, and ancient healing
              rituals—delivered wherever you are.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact">
                <Button className="px-5 py-3">Start Journey</Button>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 px-5 py-3 text-sm font-semibold text-stone-900 dark:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
              >
                Learn more
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-stone-700 dark:text-stone-300">
              <a
                href={`tel:${site.phone_href}`}
                className="inline-flex items-center gap-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 rounded"
              >
                <PhoneIcon className="h-4 w-4" /> {site.phone_display}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 rounded"
              >
                <MailIcon className="h-4 w-4" /> {site.email}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
            {/* Video Background */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://framerusercontent.com/assets/LC72yH1kyWJtP9FpdD978RzVHys.mp4"
                type="video/mp4"
              />
            </video>

            {/* Overlay Card */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 via-teal-800/60 to-stone-900/80"></div>

            {/* Content Overlay */}
            <div className="relative z-10 flex items-center justify-center h-full p-8">
              <div className="text-center text-white">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mb-4">
                  <span className="text-2xl font-bold">A</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Whole-Body Restoration
                </h3>
                <p className="text-sm opacity-90 max-w-xs">
                  Rooted in precision, guided by presence
                </p>
              </div>
            </div>

            {/* Glass Reflection Effect */}
            <div className="absolute -bottom-[75%] left-0 right-0 h-[75%] overflow-hidden rounded-2xl opacity-30">
              <div className="relative h-full transform scale-y-[-1]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source
                    src="https://framerusercontent.com/assets/LC72yH1kyWJtP9FpdD978RzVHys.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 via-teal-800/60 to-stone-900/80"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-stone-900 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
