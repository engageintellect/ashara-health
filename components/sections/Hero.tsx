"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import site from "@/content/site.json";
import { motion } from "framer-motion";
import { PhoneIcon, MailIcon } from "@/components/icons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const videoVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-stone-50 dark:bg-stone-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-5xl"
            >
              Elevating Preventive Care
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 text-xl text-stone-600 dark:text-stone-400 max-w-prose"
            >
              Root-cause healing. Delivered with reverence.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center flex-wrap gap-3"
            >
              <a href="#contact">
                <Button className="px-5 py-3">Start Journey</Button>
              </a>
              <a
                href="#vision"
                className="inline-flex items-center justify-center rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 px-5 py-3 text-sm font-semibold text-stone-900 dark:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
              >
                Learn more
              </a>
              <div className="flex items-center gap-2 ml-2">
                <a
                  href="https://instagram.com/asharahealth"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-300 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Icon icon="mdi:instagram" className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/asharahealth"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-300 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Icon icon="mdi:facebook" className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-stone-700 dark:text-stone-300"
            >
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
            </motion.div>
          </motion.div>
          <motion.div
            variants={videoVariants}
            initial="hidden"
            animate="visible"
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl"
          >
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
            <div className="absolute inset-0 bg-teal-800/60 dark:bg-teal-800/60"></div>

            {/* Content Overlay */}
            {/*
            <div className="relative z-10 flex items-center justify-center h-full p-8">
              <motion.div
                className="text-center text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mb-4">
                  <span className="text-2xl font-bold">A</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Whole-Body Restoration
                </h3>
                <p className="text-sm opacity-90 max-w-xs">
                  Rooted in precision, guided by presence
                </p>
              </motion.div>
            </div>
            */}

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
                <div className="absolute inset-0 bg-teal-900/80 dark:bg-teal-800/80"></div>
                <div className="absolute inset-0 bg-stone-50 dark:bg-stone-900"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
