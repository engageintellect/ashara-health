import site from "@/content/site.json";
import { Icon } from "@iconify/react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative py-24 sm:py-32 bg-gradient-to-br from-white via-stone-50 to-white dark:from-stone-900 dark:via-stone-800 dark:to-stone-900 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20c0-2.8-2.2-5-5-5s-5 2.2-5 5 2.2 5 5 5 5-2.2 5-5zm15 0c0-2.8-2.2-5-5-5s-5 2.2-5 5 2.2 5 5 5 5-2.2 5-5z' opacity='0.1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg shadow-teal-500/25 mb-6">
              <Icon icon="mdi:eye" className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-5xl mb-4">
              Our Vision
            </h2>
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mx-auto" />
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* East Meets West */}
            <ScrollReveal delay={0.2}>
              <div className="relative overflow-hidden rounded-3xl bg-white/70 dark:bg-stone-900/70 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50 shadow-xl shadow-stone-900/5 dark:shadow-stone-900/20 p-8 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-stone-500/5" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 border border-teal-200/50 dark:border-teal-700/50 flex items-center justify-center mb-6">
                    <Icon
                      icon="mdi:yin-yang"
                      className="w-7 h-7 text-teal-600 dark:text-teal-400"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                    East Meets West
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                    A harmonious blend integrating practices like Ayurveda and
                    Chinese Medicine with modern therapies.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Unique Beings */}
            <ScrollReveal delay={0.3}>
              <div className="relative overflow-hidden rounded-3xl bg-white/70 dark:bg-stone-900/70 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50 shadow-xl shadow-stone-900/5 dark:shadow-stone-900/20 p-8 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-stone-500/5" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 border border-teal-200/50 dark:border-teal-700/50 flex items-center justify-center mb-6">
                    <Icon
                      icon="mdi:account-heart"
                      className="w-7 h-7 text-teal-600 dark:text-teal-400"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                    Unique Beings
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                    We recognize clients as unique individuals, not just
                    cases—honoring your personal healing journey.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Mobile Sanctuary */}
            <ScrollReveal delay={0.4}>
              <div className="relative overflow-hidden rounded-3xl bg-white/70 dark:bg-stone-900/70 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50 shadow-xl shadow-stone-900/5 dark:shadow-stone-900/20 p-8 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-stone-500/5" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 border border-teal-200/50 dark:border-teal-700/50 flex items-center justify-center mb-6">
                    <Icon
                      icon="mdi:home-variant-outline"
                      className="w-7 h-7 text-teal-600 dark:text-teal-400"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                    Mobile Sanctuary
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                    Bringing healing directly to where you are—creating sacred
                    space in your preferred environment.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
