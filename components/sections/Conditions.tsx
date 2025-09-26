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
      className="relative isolate py-24 sm:py-32 overflow-hidden"
    >
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
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg shadow-teal-500/25 mb-6">
            <Icon icon="mdi:medical-bag" className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-stone-100 dark:text-stone-100 sm:text-5xl mb-4">
            What we treat
          </h2>
          <p className="text-lg text-stone-400 dark:text-stone-400 font-medium">
            Comprehensive care for complex health challenges using
            evidence-based integrative medicine
          </p>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mx-auto" />
        </ScrollReveal>

        <ScrollReveal className="mt-20" delay={0.2}>
          <div className="relative">
            {/* Mobile: Horizontal Scroller */}
            <div className="lg:hidden">
              <div
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth py-4 -mx-4 px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                aria-label="Conditions carousel"
              >
                {site.conditions.map((condition, index) => (
                  <div
                    key={condition}
                    className="flex-none w-64 sm:w-72 snap-start"
                  >
                    <div className="bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-stone-200/50 dark:border-stone-700/50 h-44">
                      <a
                        href="#contact"
                        className="relative p-4 h-full flex flex-col"
                      >
                        {/* Icon Container */}
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 border border-teal-200/50 dark:border-teal-700/50 mb-3 flex-shrink-0">
                          <Icon
                            icon={conditionIcons[condition]}
                            className="w-5 h-5 text-teal-600 dark:text-teal-400"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col">
                          <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 leading-tight mb-2">
                            {condition}
                          </h3>
                          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-3 flex-1">
                            {conditionDescriptions[condition] ||
                              "Personalized treatment approach"}
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
              {site.conditions.map((condition, index) => (
                <div
                  key={condition}
                  className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-stone-900/70 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50 shadow-xl shadow-stone-900/5 dark:shadow-stone-900/20 hover:shadow-2xl hover:shadow-stone-900/10 dark:hover:shadow-stone-900/30 transition-all duration-500"
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-stone-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Subtle Border Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                  <a href="#contact" className="relative block p-6 h-64">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 border border-teal-200/50 dark:border-teal-700/50 group-hover:scale-110 transition-transform duration-300">
                        <Icon
                          icon={conditionIcons[condition]}
                          className="w-7 h-7 text-teal-600 dark:text-teal-400 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors duration-300"
                        />
                      </div>
                      {/* Pulse Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-teal-500/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 leading-tight group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors duration-300">
                        {condition}
                      </h3>
                      <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-medium">
                        {conditionDescriptions[condition] ||
                          "Personalized treatment approach"}
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
              icon="mdi:shield-check"
              className="w-5 h-5 text-teal-600 dark:text-teal-400"
            />
            <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
              Evidence-based treatments tailored to your unique needs
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
