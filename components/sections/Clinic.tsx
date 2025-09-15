import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import site from "@/content/site.json";
import ScrollReveal from "@/components/ScrollReveal";
import dynamic from "next/dynamic";

const CustomMap = dynamic(() => import("@/components/CustomMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-900 rounded-t-3xl flex items-center justify-center">
      <div className="text-stone-500 dark:text-stone-400 flex items-center gap-2">
        <Icon icon="mdi:loading" className="w-5 h-5 animate-spin" />
        Loading map...
      </div>
    </div>
  ),
});

export default function Clinic() {
  return (
    <section
      // className="relative py-24 sm:py-32 bg-gradient-to-br from-stone-50 via-white to-stone-100 dark:from-stone-950 dark:via-stone-900 dark:to-stone-800 overflow-hidden"
      className="relative isolate py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M30 30m-2 0a2 2 0 1 1 4 0a2 2 0 1 1 -4 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div> */}

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        {/* You can replace this with your desired video URL */}
        <source
          src="https://cdn.pixabay.com/video/2021/02/18/65562-515098354_large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950/50 via-stone-900/50 to-stone-800/50 -z-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg shadow-teal-500/25 mb-6">
            <Icon icon="mdi:map-marker" className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-stone-100 dark:text-stone-100 sm:text-5xl mb-4">
            Visit Our Clinic
          </h2>
          <p className="text-lg text-stone-400 dark:text-stone-400 font-medium">
            Located in the heart of Laguna Beach, California
          </p>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mx-auto" />
        </ScrollReveal>

        <ScrollReveal className="mx-auto max-w-5xl" delay={0.2}>
          <div className="group relative overflow-hidden rounded-3xl bg-white/70 dark:bg-stone-900/70 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50 shadow-2xl shadow-stone-900/10 dark:shadow-stone-900/30 hover:shadow-3xl transition-all duration-500">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-stone-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="aspect-[16/9] w-full relative overflow-hidden rounded-t-3xl">
              <CustomMap address={site.address} />
            </div>

            <div className="relative p-8">
              <div className="grid gap-8 md:grid-cols-2 items-start">
                {/* Clinic Info */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 border border-teal-200/50 dark:border-teal-700/50 flex items-center justify-center">
                        <Icon
                          icon="mdi:hospital-building"
                          className="w-6 h-6 text-teal-600 dark:text-teal-400"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">
                          Ashara Health & Wellness
                        </h3>
                        <p className="text-sm text-stone-600 dark:text-stone-400">
                          Naturopathic Medicine Practice
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 mb-4">
                      <Icon
                        icon="mdi:map-marker"
                        className="w-5 h-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0"
                      />
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                        32406 S Coast Hwy, Laguna Beach, CA 92651
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Icon
                        icon="mdi:clock"
                        className="w-5 h-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0"
                      />
                      <div>
                        <p className="text-sm font-semibold text-stone-900 dark:text-stone-100 mb-2">
                          Hours
                        </p>
                        <div className="space-y-1">
                          {site.hours.map((h) => (
                            <div
                              key={h.label}
                              className="flex justify-between text-sm text-stone-600 dark:text-stone-400"
                            >
                              <span className="min-w-[80px]">{h.label}:</span>
                              <span>{h.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-50/50 to-teal-100/50 dark:from-teal-900/20 dark:to-teal-800/20 border border-teal-200/30 dark:border-teal-700/30">
                    <h4 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-4">
                      Ready to visit?
                    </h4>
                    <div className="space-y-3">
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(
                          site.address
                        )}&navigate=yes`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                      >
                        <Icon icon="mdi:directions" className="w-4 h-4" />
                        Get Directions
                      </a>
                      <a
                        href={`tel:${site.phone_href}`}
                        className="flex items-center justify-center gap-2 rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 px-6 py-3 text-sm font-semibold text-stone-900 dark:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors duration-300 w-full"
                      >
                        <Icon icon="mdi:phone" className="w-4 h-4" />
                        Call Clinic
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Call to Action */}
        <ScrollReveal className="mt-16 text-center" delay={0.4}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-100/80 dark:bg-stone-800/80 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50">
            <Icon
              icon="mdi:heart"
              className="w-5 h-5 text-teal-600 dark:text-teal-400"
            />
            <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
              Experience healing in our serene Laguna Beach location
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
