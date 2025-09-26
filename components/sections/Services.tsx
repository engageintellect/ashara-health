import site from "@/content/site.json";
import { Icon } from "@iconify/react";
import ScrollReveal from "@/components/ScrollReveal";

const serviceIcons: Record<string, string> = {
  "Naturopathic Medicine": "mdi:leaf",
  Acupuncture: "mdi:needle",
  "Lifestyle Audit & Detoxification": "mdi:heart-pulse",
  "IV Therapy": "mdi:iv-bag",
  "Hyperbaric Oxygen & Light/Frequency Tech": "mdi:lightbulb-on",
  "Peptide Optimization": "mdi:dna",
  "Regenerative Medicine": "mdi:medical-bag",
  "Functional Wellness & Specialty Labs": "mdi:test-tube",
  "Classical Hydrotherapy": "mdi:water",
  "Ozone Therapy": "mdi:air-filter",
  "Hormone Optimization": "mdi:chart-line",
  "Concierge & In‑Office Blood Draws": "mdi:hospital-box",
};

const serviceDescriptions: Record<string, string> = {
  "Naturopathic Medicine":
    "Whole-person healing using nature's wisdom and modern science",
  Acupuncture: "Ancient meridian therapy to restore energy flow and balance",
  "Lifestyle Audit & Detoxification":
    "Comprehensive assessment and gentle cleansing protocols",
  "IV Therapy": "Direct nutrient delivery for optimal cellular restoration",
  "Hyperbaric Oxygen & Light/Frequency Tech":
    "Advanced therapies to enhance healing and vitality",
  "Peptide Optimization":
    "Precision molecules to support regeneration and performance",
  "Regenerative Medicine":
    "Cutting-edge treatments to restore and rejuvenate tissue",
  "Functional Wellness & Specialty Labs":
    "Deep diagnostic insights to uncover root causes",
  "Classical Hydrotherapy":
    "Time-honored water therapies for detox and circulation",
  "Ozone Therapy": "Oxygen enhancement to boost immune function and healing",
  "Hormone Optimization": "Balanced endocrine support for sustained wellness",
  "Concierge & In‑Office Blood Draws":
    "Convenient lab services in comfort and privacy",
};

export default function Services() {

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 bg-gradient-to-br from-white via-stone-50 to-white dark:from-stone-900 dark:via-stone-800 dark:to-stone-900 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z' opacity='0.1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg shadow-teal-500/25 mb-6">
            <Icon icon="mdi:stethoscope" className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-5xl mb-4">
            Services
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-400 font-medium">
            Where ancient rituals meet modern healing through evidence-based
            integrative medicine
          </p>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mx-auto" />
        </ScrollReveal>

        <ScrollReveal className="mt-20" delay={0.2}>
          <div className="relative">
            {/* Mobile: Horizontal Scroller */}
            <div className="lg:hidden">
              <div
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth py-4 -mx-4 px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                aria-label="Services carousel"
              >
                {site.services.map((service, index) => (
                  <div
                    key={service}
                    className="flex-none w-64 sm:w-72 snap-start"
                  >
                    <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-lg overflow-hidden border border-stone-200/50 dark:border-stone-700/50 h-48">
                      <a href="#contact" className="relative p-4 h-full flex flex-col">
                        {/* Icon Container */}
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 border border-teal-200/50 dark:border-teal-700/50 mb-3 flex-shrink-0">
                          <Icon
                            icon={serviceIcons[service]}
                            className="w-5 h-5 text-teal-600 dark:text-teal-400"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col">
                          <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 leading-tight mb-2">
                            {service}
                          </h3>
                          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-3 flex-1">
                            {serviceDescriptions[service] ||
                              "Evidence-based approach tailored to your needs"}
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Desktop: Grid Layout */}
            <div className="hidden lg:grid gap-5 grid-cols-4">
              {site.services.map((service, index) => (
                <div
                  key={service}
                  className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-stone-800/70 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50 shadow-xl shadow-stone-900/5 dark:shadow-stone-900/20 hover:shadow-2xl hover:shadow-stone-900/10 dark:hover:shadow-stone-900/30 transition-all duration-500"
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-stone-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Subtle Border Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                  <a href="#contact" className="relative block p-6 h-full">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 border border-teal-200/50 dark:border-teal-700/50 group-hover:scale-110 transition-transform duration-300">
                        <Icon
                          icon={serviceIcons[service]}
                          className="w-6 h-6 text-teal-600 dark:text-teal-400 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors duration-300"
                        />
                      </div>
                      {/* Pulse Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-teal-500/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 leading-tight group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors duration-300">
                        {service}
                      </h3>
                      <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-medium">
                        {serviceDescriptions[service] ||
                          "Evidence-based approach tailored to your needs"}
                      </p>
                    </div>

                    {/* Arrow Indicator */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <Icon
                        icon="mdi:arrow-right"
                        className="w-5 h-5 text-teal-600 dark:text-teal-400"
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Call to Action */}
        <ScrollReveal className="mt-16 text-center" delay={0.4}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-100/80 dark:bg-stone-800/80 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50">
            <Icon
              icon="mdi:leaf"
              className="w-5 h-5 text-teal-600 dark:text-teal-400"
            />
            <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
              Integrative therapies combining ancient wisdom with modern science
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
