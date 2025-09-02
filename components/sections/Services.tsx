import site from "@/content/site.json";
import { Icon } from "@iconify/react";

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
          {site.services.map((name) => (
            <li key={name} className="group">
              <a
                href="#contact"
                className="block h-full rounded-2xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 shadow-sm transition group-hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 overflow-hidden"
                aria-describedby={`svc-${name}`}
              >
                <div className="h-52 w-full flex items-center justify-center bg-teal-50 dark:bg-teal-900/20">
                  <Icon
                    icon={serviceIcons[name]}
                    className="w-16 h-16 text-teal-700 dark:text-teal-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                      {name}
                    </h3>
                  </div>
                  <p
                    id={`svc-${name}`}
                    className="mt-2 text-sm text-stone-700 dark:text-stone-300"
                  >
                    Tailored care and guidance based on your goals.
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
