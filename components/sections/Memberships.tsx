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
    "Telehealth Basic": {
      title: "Telehealth Basic",
      price: "$150",
      note: "30 min virtual consultation",
      icon: "mdi:video",
      features: [
        "30-minute video consultation",
        "General health questions",
        "Basic wellness advice",
        "Prescription refills",
      ],
      popular: false,
    },
    "Telehealth Premium": {
      title: "Telehealth Premium",
      price: "$275",
      note: "60 min comprehensive virtual visit",
      icon: "mdi:video-account",
      features: [
        "60-minute in-depth consultation",
        "Comprehensive health review",
        "Personalized recommendations",
        "Follow-up plan",
      ],
      popular: false,
    },
    "Telehealth Elite": {
      title: "Telehealth Elite",
      price: "$375",
      note: "90 min in-depth virtual consultation with treatment plan",
      icon: "mdi:video-plus",
      features: [
        "90-minute comprehensive evaluation",
        "Detailed health assessment",
        "Customized treatment plan",
        "30-day follow-up message support",
      ],
      popular: false,
    },
  };

  return (
    <section
      id="pricing"
      className="relative py-24 sm:py-32 bg-gradient-to-br from-stone-50 via-white to-stone-100 dark:from-stone-950 dark:via-stone-900 dark:to-stone-800 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M30 30m-1.5 0a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1 -3 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg shadow-teal-500/25 mb-6">
            <Icon
              icon="mdi:card-account-details"
              className="w-8 h-8 text-white"
            />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-5xl mb-4">
            Memberships
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-400 font-medium">
            Choose the right level of care for your wellness journey
          </p>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mx-auto" />
        </ScrollReveal>

        <ScrollReveal
          className="mt-20 grid gap-2 sm:gap-5 lg:grid-cols-3"
          delay={0.2}
        >
          {site.memberships.map((m, index) => {
            const details =
              membershipDetails[m.name as keyof typeof membershipDetails];

            return (
              <div
                key={m.name}
                className={`relative group overflow-hidden rounded-3xl ${
                  details?.popular
                    ? "bg-gradient-to-br from-teal-50/80 to-teal-100/80 dark:from-teal-900/40 dark:to-teal-800/40 border-2 border-teal-200 dark:border-teal-700 shadow-xl shadow-teal-500/10"
                    : "bg-white/70 dark:bg-stone-900/70 border border-stone-200/50 dark:border-stone-700/50 shadow-xl shadow-stone-900/5 dark:shadow-stone-900/20"
                } backdrop-blur-sm hover:shadow-2xl lg:hover:-translate-y-1 transition-all duration-500`}
              >
                {details?.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-teal-500 to-teal-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-stone-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-5 sm:p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 border border-teal-200/50 dark:border-teal-700/50 group-hover:scale-110 transition-transform duration-300">
                      <Icon
                        icon={details?.icon || "mdi:medical-bag"}
                        className="h-8 w-8 text-teal-600 dark:text-teal-400 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                      {details?.title || m.name}
                    </h3>
                    <p className="text-sm text-stone-600 dark:text-stone-400 font-medium">
                      {details?.note || m.note}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold bg-gradient-to-r from-stone-900 to-stone-700 dark:from-stone-100 dark:to-stone-300 bg-clip-text text-transparent">
                        {details?.price || m.price}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 dark:text-stone-500 uppercase tracking-wide font-semibold">
                      Per Session
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {details?.features?.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center mt-0.5">
                          <Icon
                            icon="mdi:check"
                            className="h-3 w-3 text-white"
                          />
                        </div>
                        <span className="ml-3 text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div>
                    <a href="#contact" className="block">
                      <Button
                        className={`w-full rounded-xl py-3 font-semibold transition-all duration-300 ${
                          details?.popular
                            ? "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl"
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

        {/* Call to Action */}
        <ScrollReveal className="mt-16 text-center" delay={0.4}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-100/80 dark:bg-stone-800/80 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50">
            <Icon
              icon="mdi:shield-check"
              className="w-5 h-5 text-teal-600 dark:text-teal-400"
            />
            <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
              All sessions include personalized treatment plans and follow-up
              support
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
