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

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 py-20 sm:py-24 bg-white dark:bg-stone-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
            Services
          </h2>
          <p className="mt-3 text-stone-700 dark:text-stone-300">
            Where ancient rituals meet modern healing
          </p>
        </ScrollReveal>
        <ScrollReveal
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          delay={0.2}
        >
          {site.services.map((service, index) => (
            <div
              key={service}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-stone-800 p-6 shadow-sm transition-all hover:shadow-md border border-stone-200 dark:border-stone-700"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-teal-100 dark:bg-teal-900/30 mb-4">
                <Icon
                  icon={serviceIcons[service]}
                  className="w-8 h-8 text-teal-800 dark:text-teal-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">
                {service}
              </h3>
              <p className="text-sm text-stone-700 dark:text-stone-300">
                Evidence-based approach tailored to your needs
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
