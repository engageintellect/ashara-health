"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PhoneIcon, MailIcon } from "@/components/icons";
import site from "@/content/site.json";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "What We Treat", href: "#services" },
  { label: "Memberships", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from localStorage on mount
  useEffect(() => {
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
      // Check system preference
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(systemDark);
      if (systemDark) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  // Update localStorage and document class when dark mode changes
  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode.toString());
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <header
        id="home"
        role="banner"
        className="sticky top-0 z-40 bg-white/80 dark:bg-stone-900/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-stone-900/60 border-b border-stone-200 dark:border-stone-700"
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
            <div className="md:hidden">
              {/* TODO: add Sheet-based mobile menu if desired */}
            </div>
          </div>
        </div>
      </header>

      <main id="main" className="relative bg-white dark:bg-stone-900">
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
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 bg-white dark:bg-stone-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
                Our Vision
              </h2>
              <p className="mt-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                Our approach emphasizes recognizing clients as unique beings,
                not just cases. Ashara represents a harmonious blend of East
                Meets West, integrating practices like Ayurveda and Chinese
                Medicine with modern therapies. We are a Mobile Sanctuary,
                bringing healing to where you are.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 bg-stone-50 dark:bg-stone-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
                What we treat
              </h2>
              <p className="mt-3 text-stone-700 dark:text-stone-300">
                Comprehensive care for mind and body
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {site.conditions.map((condition) => (
                <div
                  key={condition}
                  className="group relative overflow-hidden rounded-2xl bg-white dark:bg-stone-800 p-6 shadow-sm transition-all hover:shadow-md border border-stone-200 dark:border-stone-700"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 mb-4">
                    <div className="w-6 h-6 rounded-full bg-teal-800 dark:bg-teal-700"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">
                    {condition}
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400">
                    Personalized treatment plans addressing root causes
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-white dark:bg-stone-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-5xl">
                  Root-cause healing.
                </h2>
                <p className="mt-2 text-2xl font-semibold text-teal-800 dark:text-teal-300">
                  Delivered with reverence.
                </p>
              </div>

              <div className="text-left space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                <p>
                  Burnout. Hormonal shifts. Chronic symptoms. Fatigue that won't
                  lift.
                </p>

                <p className="text-xl font-medium text-stone-900 dark:text-stone-100">
                  At Ashara, we don't silence your body—we listen.
                </p>

                <p>
                  Our concierge wellness model blends regenerative therapies,
                  advanced diagnostics, IV infusions, and ancient healing
                  rituals—delivered wherever you are. Every protocol is
                  personalized by licensed Naturopathic Doctors and Eastern
                  medicine experts, restoring energy, clarity, and deep
                  vitality.
                </p>

                <p className="text-xl font-medium text-stone-900 dark:text-stone-100 italic">
                  This is whole-body restoration—rooted in precision, guided by
                  presence.
                </p>
              </div>

              <div className="mt-10 text-center">
                <a href="#contact">
                  <Button className="px-8 py-4 text-lg">
                    Begin Your Healing Journey
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
                Services
              </h2>
              <p className="mt-3 text-stone-700 dark:text-stone-300">
                Where ancient rituals meet modern healing
              </p>
            </div>
            <ul
              className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              role="list"
            >
              {site.services.map((name) => {
                return (
                  <li key={name} className="group">
                    <a
                      href="#contact"
                      className="block h-full rounded-2xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 shadow-sm transition group-hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 overflow-hidden"
                      aria-describedby={`svc-${name}`}
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden bg-teal-900/10 dark:bg-teal-700/10">
                        <svg viewBox="0 0 600 450" className="h-full w-full">
                          <defs>
                            <linearGradient
                              id={`g-${name}`}
                              x1="0"
                              x2="1"
                              y1="0"
                              y2="1"
                            >
                              <stop offset="0%" stopColor="#0f3d36" />
                              <stop offset="100%" stopColor="#96c3b0" />
                            </linearGradient>
                          </defs>
                          <rect
                            width="600"
                            height="450"
                            fill={`url(#g-${name})`}
                            opacity="0.25"
                          />
                          <circle
                            cx="140"
                            cy="120"
                            r="70"
                            fill="#0f3d36"
                            opacity="0.5"
                          />
                          <circle
                            cx="480"
                            cy="260"
                            r="110"
                            fill="#96c3b0"
                            opacity="0.5"
                          />
                          <rect
                            x="220"
                            y="180"
                            width="160"
                            height="100"
                            rx="16"
                            fill="#0f3d36"
                            opacity="0.35"
                          />
                          <path
                            d="M120 300c60 40 180 40 300 0"
                            stroke="#0f3d36"
                            strokeWidth="10"
                            fill="none"
                            opacity="0.3"
                          />
                        </svg>
                      </div>
                      <div className="p-6">
                        <div className="flex items-start justify-between">
                          <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                            {name}
                          </h3>
                          <span
                            aria-hidden
                            className="rounded-full border border-stone-200 dark:border-stone-700 px-2 py-0.5 text-xs text-stone-600 dark:text-stone-400"
                          >
                            Inquire
                          </span>
                        </div>
                        <p
                          id={`svc-${name}`}
                          className="mt-2 text-sm text-stone-700 dark:text-stone-300"
                        >
                          {/* Brief summary about {name}. Replace with approved copy. */}
                          Tailored care and guidance based on your goals.
                        </p>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="py-20 sm:py-24 bg-stone-50 dark:bg-stone-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
                Testimonials
              </h2>
              <p className="mt-3 text-stone-700 dark:text-stone-300">
                What our patients are saying about their healing journey
              </p>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {site.testimonials.map((testimonial, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current text-yellow-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.602-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-stone-700 dark:text-stone-300 mb-4 leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="flex items-center justify-between text-sm">
                      <cite className="font-semibold text-stone-900 dark:text-stone-100 not-italic">
                        {testimonial.name}
                      </cite>
                      <span className="text-stone-500 dark:text-stone-400">
                        {testimonial.timeAgo}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="scroll-mt-24 bg-stone-100/60 dark:bg-stone-900/60 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
                Memberships
              </h2>
              <p className="mt-3 text-stone-700 dark:text-stone-300">
                Clear options for how to engage—virtual, on-site, or in-clinic.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {site.memberships.map((m) => (
                <Card key={m.name} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{m.name}</CardTitle>
                    <CardDescription>{m.note}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul
                      className="space-y-2 text-sm text-stone-800 dark:text-stone-200"
                      role="list"
                    >
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-teal-800 dark:bg-teal-700" />
                        <span>Personalized plan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-teal-800 dark:bg-teal-700" />
                        <span>Access to priority scheduling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-teal-800 dark:bg-teal-700" />
                        <span>Messaging between visits</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <a href="#contact">
                      <Button className="w-full">Start Journey</Button>
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-3 text-stone-700 dark:text-stone-300">
                Short answers to common questions. Replace with your actual FAQ.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  q: "Do you accept insurance?",
                  a: "We operate out-of-network and can provide superbills for reimbursement.",
                },
                {
                  q: "Are telehealth visits available?",
                  a: "Yes—virtual consults are available for eligible services.",
                },
                {
                  q: "Can you order labs and imaging?",
                  a: "Yes. We coordinate with lab and radiology partners as indicated.",
                },
                {
                  q: "What ages do you see?",
                  a: "Primarily adults; please contact us for specifics.",
                },
              ].map((item) => (
                <Card key={item.q}>
                  <div className="font-semibold text-stone-900 dark:text-stone-100">
                    {item.q}
                  </div>
                  <div className="mt-2 text-stone-700 dark:text-stone-300">
                    {item.a}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 bg-white dark:bg-stone-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
                Visit Our Clinic
              </h2>
              <p className="mt-3 text-stone-700 dark:text-stone-300">
                Located in the heart of Laguna Beach, California
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <div className="aspect-[16/9] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.8234567890123!2d-117.7831234567890!3d33.5423456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcf2a1b2c3d4e5%3A0x1234567890abcdef!2s32406%20S%20Coast%20Hwy%2C%20Laguna%20Beach%2C%20CA%2092651!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Custom overlay with address and directions button */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white dark:bg-stone-800 rounded-xl p-4 shadow-lg border border-stone-200 dark:border-stone-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 rounded-full bg-teal-800 dark:bg-teal-700"></div>
                        <span className="font-semibold text-stone-900 dark:text-stone-100">
                          Ashara Health & Wellness
                        </span>
                      </div>
                      <p className="text-sm text-stone-600 dark:text-stone-400">
                        32406 S Coast Hwy, Laguna Beach, CA 92651
                      </p>
                    </div>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        site.address
                      )}&navigate=yes`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-teal-800 dark:bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-900 dark:hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-stone-600 dark:text-stone-400">
                Convenient parking available • Easy access from Pacific Coast
                Highway
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-24 bg-stone-100/60 dark:bg-stone-900/60 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
                  Contact us
                </h2>
                <p className="mt-3 text-stone-700 dark:text-stone-300">
                  Send a note and our team will follow up.
                </p>
                <div className="mt-6 space-y-3 text-stone-800 dark:text-stone-200">
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
                  <div className="pt-2 text-sm text-stone-700 dark:text-stone-300">
                    <div className="font-semibold">Opening hours</div>
                    <ul className="mt-1 space-y-1">
                      {site.hours.map((h) => (
                        <li key={h.label}>
                          <span className="inline-block w-20">{h.label}:</span>{" "}
                          {h.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <form
                className="rounded-2xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 p-6 shadow-sm"
                aria-describedby="form-status"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="name">Full name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Alex Morgan"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@domain.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">How can we help?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us a bit about your goals…"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div
                      id="form-status"
                      role="status"
                      aria-live="polite"
                      className="text-sm text-stone-600 dark:text-stone-400"
                    >
                      We usually respond within one business day.
                    </div>
                    <Button type="submit">Send message</Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

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
                {/* Replace with your approved tagline/copy */}
                Thoughtful, root‑cause care delivered with empathy.
              </p>
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
    </>
  );
}
