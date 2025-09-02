import { Icon } from "@iconify/react";
import site from "@/content/site.json";
import ScrollReveal from "@/components/ScrollReveal";

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

const conditionDescriptions: Record<string, string> = {
  "Metabolism & Heart Health":
    "Optimize cardiovascular function and metabolic pathways naturally",
  "Autoimmune & Inflammation":
    "Calm immune system overactivity with targeted healing protocols",
  "Digestive Issues":
    "Restore gut health and microbiome balance for optimal wellness",
  "Brain Fog & Fatigue":
    "Clear mental cloudiness and restore sustained energy levels",
  "Mold & Heavy Metal Toxicity":
    "Gentle detoxification to eliminate environmental toxins safely",
  "Joint & Spine Pain":
    "Address inflammation and restore mobility through natural methods",
  "Hair & Skin Health":
    "Nourish from within for radiant skin and healthy hair growth",
  "Weight Management":
    "Sustainable approaches to healthy weight and metabolic balance",
};

export default function Conditions() {
  return (
    <section
      id="conditions"
      className="py-20 sm:py-24 bg-stone-50 dark:bg-stone-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
            What we treat
          </h2>
          <p className="mt-3 text-stone-700 dark:text-stone-300">
            Comprehensive care for complex health challenges
          </p>
        </ScrollReveal>
        <ScrollReveal
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          delay={0.2}
        >
          {site.conditions.map((condition, index) => (
            <div
              key={condition}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-stone-800 p-6 shadow-sm transition-all hover:shadow-md border border-stone-200 dark:border-stone-700 h-48 flex flex-col"
            >
              <a href={`#contact-form`} className="flex flex-col h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 mb-4 flex-shrink-0">
                  <Icon
                    icon={conditionIcons[condition]}
                    className="w-6 h-6 text-teal-600 dark:text-teal-400"
                  />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2 flex-shrink-0 leading-tight">
                  {condition}
                </h3>
                <p className="text-sm text-stone-700 dark:text-stone-300 flex-grow">
                  {conditionDescriptions[condition] ||
                    "Personalized treatment approach"}
                </p>
              </a>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
