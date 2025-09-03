import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Approach() {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-stone-50 via-white to-stone-100 dark:from-stone-950 dark:via-stone-900 dark:to-stone-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M30 30m-2 0a2 2 0 1 1 4 0a2 2 0 1 1 -4 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg shadow-teal-500/25 mb-6">
              <Icon icon="mdi:heart-pulse" className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-5xl mb-4">
              Root-cause healing
            </h2>
            <p className="text-xl text-teal-600 dark:text-teal-400 font-semibold">
              Delivered with reverence
            </p>
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mx-auto" />
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            {/* Content Card */}
            <ScrollReveal delay={0.2}>
              <div className="relative overflow-hidden rounded-3xl bg-white/70 dark:bg-stone-900/70 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50 shadow-xl shadow-stone-900/5 dark:shadow-stone-900/20 p-8">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-stone-500/5" />

                <div className="relative space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 border border-teal-200/50 dark:border-teal-700/50 flex items-center justify-center">
                      <Icon
                        icon="mdi:ear-hearing"
                        className="w-6 h-6 text-teal-600 dark:text-teal-400"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                        We listen to your body
                      </h3>
                      <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                        At Ashara, we don't silence your symptoms—we understand
                        them as your body's wisdom speaking.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 border border-teal-200/50 dark:border-teal-700/50 flex items-center justify-center">
                      <Icon
                        icon="mdi:spa"
                        className="w-6 h-6 text-teal-600 dark:text-teal-400"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                        Integrative approach
                      </h3>
                      <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                        Blending regenerative therapies, advanced diagnostics,
                        and ancient healing rituals.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 border border-teal-200/50 dark:border-teal-700/50 flex items-center justify-center">
                      <Icon
                        icon="mdi:home-heart"
                        className="w-6 h-6 text-teal-600 dark:text-teal-400"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                        Delivered wherever you are
                      </h3>
                      <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                        Our concierge wellness model brings personalized care to
                        your preferred setting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Quote Card */}
            <ScrollReveal delay={0.4}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 border border-teal-200/50 dark:border-teal-700/50 shadow-xl shadow-teal-500/10 p-8">
                {/* <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center">
                  <Icon
                    icon="mdi:format-quote-open"
                    className="w-6 h-6 text-teal-600 dark:text-teal-400"
                  />
                </div> */}

                <div className="">
                  <blockquote className="text-xl font-medium text-stone-900 dark:text-stone-100 leading-relaxed italic mb-6">
                    "Whole-body restoration—rooted in precision, guided by
                    presence."
                  </blockquote>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <div>
                      <div className="font-semibold text-stone-900 dark:text-stone-100">
                        Ashara Health
                      </div>
                      <div className="text-sm text-stone-600 dark:text-stone-400">
                        Naturopathic Medicine
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.6} className="mt-16 text-center">
            <a href="#contact">
              <Button className="px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Begin Your Healing Journey
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
