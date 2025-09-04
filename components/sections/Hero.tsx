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

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-stone-50 dark:bg-stone-900">
      {/* Top Right Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal-100/30 via-teal-50/20 to-transparent dark:from-teal-900/20 dark:via-teal-950/10 dark:to-transparent rounded-full blur-3xl" />

      {/* Floating Geometric Shapes */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-teal-200/20 to-teal-300/30 dark:from-teal-800/20 dark:to-teal-700/30 rounded-2xl rotate-12 blur-sm"
        style={{ animationDelay: "0s" }}
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-32 left-20 w-12 h-12 bg-gradient-to-br from-stone-200/30 to-stone-300/40 dark:from-stone-700/30 dark:to-stone-600/40 rounded-full blur-sm"
        style={{ animationDelay: "2s" }}
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-40 right-20 w-8 h-8 bg-gradient-to-br from-teal-300/40 to-teal-400/50 dark:from-teal-600/40 dark:to-teal-500/50 rounded-lg rotate-45 blur-sm"
        style={{ animationDelay: "4s" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-5xl lg:text-7xl"
            >
              <span className="block">Elevating</span>
              <span className="block bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600 bg-clip-text text-transparent">
                Preventive Care
              </span>
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

          {/* Video Section with Enhanced Design */}
          <motion.div
            variants={videoVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Skewed Teal Card Background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-teal-500/20 to-teal-600/30 dark:from-teal-600/20 dark:to-teal-700/30 rounded-3xl transform rotate-2 blur-sm" />
            <div className="absolute -inset-2 bg-gradient-to-br from-teal-400/10 to-teal-500/20 dark:from-teal-500/10 dark:to-teal-600/20 rounded-3xl transform -rotate-1" />

            {/* Main Video Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl shadow-teal-900/20 dark:shadow-teal-900/40 transform hover:scale-[1.02] transition-transform duration-500">
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

              {/* Enhanced Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 via-teal-800/40 to-stone-900/60" />

              {/* Content Overlay */}
              {/* <div className="absolute inset-0 flex items-center justify-center p-8">
                <motion.div
                  className="text-center text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 mb-4 shadow-lg">
                    <Icon
                      icon="mdi:heart-pulse"
                      className="w-8 h-8 text-white"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 leading-tight">
                    Whole-Body Restoration
                  </h3>
                  <p className="text-white/90 text-sm max-w-xs leading-relaxed">
                    Rooted in precision, guided by presence
                  </p>
                </motion.div>
              </div> */}

              {/* Decorative Border */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-teal-400 rounded-full shadow-lg animate-pulse" />
              <div
                className="absolute bottom-4 left-4 w-2 h-2 bg-white/60 rounded-full shadow-md animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>

            {/* Floating Particles around Video */}
            <motion.div
              animate={{
                y: [-5, 5, -5],
                x: [-2, 2, -2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full shadow-lg"
            />
            <motion.div
              animate={{
                y: [5, -5, 5],
                x: [2, -2, 2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-3 -left-3 w-3 h-3 bg-gradient-to-br from-stone-400 to-stone-500 rounded-full shadow-md"
            />
            <motion.div
              animate={{
                y: [-3, 3, -3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/2 -right-4 w-2 h-2 bg-teal-300 rounded-sm shadow-sm"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
