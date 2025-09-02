import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import site from "@/content/site.json";
import ScrollReveal from "@/components/ScrollReveal";

export default function Memberships() {
  const membershipDetails = {
    "Deep Dive": {
      title: "Deep Dive",
      price: "$444",
      note: "90 min visit with focused 30 min follow-up visit",
      icon: "mdi:stethoscope",
      features: [
        "Comprehensive health assessment",
        "Root cause analysis with lab review",
        "Personalized healing plan",
        "Integrative treatment approach",
      ],
      popular: false,
    },
    "Foundations Visit": {
      title: "Foundations Visit",
      price: "$222",
      note: "45 min visit",
      icon: "mdi:heart-pulse",
      features: [
        "Focused wellness consultation",
        "Single issue or goal targeting",
        "Treatment plan review",
        "Progress assessment",
      ],
      popular: true,
    },
    "Follow-Up Visit": {
      title: "Follow-Up Visit",
      price: "$99",
      note: "Ongoing support to refine your treatment plan",
      icon: "mdi:calendar-check",
      features: [
        "Treatment plan adjustments",
        "Supplement optimization",
        "Progress monitoring",
        "Ongoing wellness support",
      ],
      popular: false,
    },
  };

  return (
    <section id="pricing" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
            Memberships
          </h2>
          <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
            Choose the right level of care for your wellness journey
          </p>
        </ScrollReveal>

        <ScrollReveal
          className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6"
          delay={0.2}
        >
          {site.memberships.map((m, index) => {
            const details =
              membershipDetails[m.name as keyof typeof membershipDetails];

            return (
              <div
                key={m.name}
                className={`relative rounded-xl border ${
                  details?.popular
                    ? "border-teal-200 dark:border-teal-800 bg-white dark:bg-stone-900 shadow-xl"
                    : "border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 shadow-lg"
                } hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                {details?.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-900/30">
                      <Icon
                        icon={details?.icon || "mdi:medical-bag"}
                        className="h-8 w-8 text-teal-600 dark:text-teal-400"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                      {details?.title || m.name}
                    </h3>
                    <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
                      {details?.note || m.note}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mt-6 text-center">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-stone-900 dark:text-stone-100">
                        {details?.price || m.price}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="mt-8 space-y-3">
                    {details?.features?.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Icon
                          icon="mdi:check"
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600 dark:text-teal-400"
                        />
                        <span className="ml-3 text-sm text-stone-700 dark:text-stone-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <a href="#contact" className="block">
                      <Button
                        className={`w-full rounded-xl py-3 font-semibold ${
                          details?.popular
                            ? "bg-teal-600 hover:bg-teal-700 text-white"
                            : "bg-stone-100 hover:bg-stone-200 text-stone-900 dark:bg-stone-800 dark:hover:bg-stone-700 dark:text-stone-100"
                        }`}
                        variant={details?.popular ? "default" : "secondary"}
                      >
                        Get Started
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
