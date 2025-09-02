import site from "@/content/site.json";
import { Icon } from "@iconify/react";

// Icon mapping for each condition
const conditionIcons: Record<string, string> = {
  "Metabolism & Heart Health": "mdi:heart-pulse",
  "Autoimmune & Inflammation": "mdi:shield-cross",
  "Digestive Issues": "mdi:stomach",
  "Brain Fog & Fatigue": "mdi:brain",
  "Mold & Heavy Metal Toxicity": "mdi:biohazard",
  "Joint & Spine Pain": "mdi:bone",
  "Hair & Skin Health": "mdi:face-woman-shimmer",
  "Weight Management": "mdi:scale-bathroom",
};

export default function Conditions() {
  return (
    <section className="py-20 sm:py-24 bg-stone-100 dark:bg-stone-800">
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
            <a
              key={condition}
              href={`#contact-form`}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-stone-800 p-6 shadow-sm transition-all hover:shadow-md border border-stone-200 dark:border-stone-700"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 mb-4">
                <Icon
                  icon={conditionIcons[condition]}
                  className="w-6 h-6 text-teal-800 dark:text-teal-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">
                {condition}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Personalized treatment plans addressing root causes
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
