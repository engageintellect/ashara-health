import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

export default function Approach() {
  return (
    <section className="py-20 sm:py-28 bg-stone-50 dark:bg-stone-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
              Root-cause healing.
            </h2>
            <p className="mt-2 text-2xl font-semibold text-teal-800 dark:text-teal-300">
              Delivered with reverence.
            </p>
          </ScrollReveal>

          <ScrollReveal
            delay={0.2}
            className="text-left space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed"
          >
            <p>
              Burnout. Hormonal shifts. Chronic symptoms. Fatigue that won't
              lift.
            </p>

            <p className="text-xl font-medium text-stone-900 dark:text-stone-100">
              At Ashara, we don't silence your body—we listen.
            </p>

            <p>
              Our concierge wellness model blends regenerative therapies,
              advanced diagnostics, IV infusions, and ancient healing
              rituals—delivered wherever you are. Every protocol is personalized
              by licensed Naturopathic Doctors and Eastern medicine experts,
              restoring energy, clarity, and deep vitality.
            </p>

            <p className="text-xl font-medium text-stone-900 dark:text-stone-100 italic">
              This is whole-body restoration—rooted in precision, guided by
              presence.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="mt-10 text-center">
            <a href="#contact">
              <Button className="px-8 py-4 text-lg">
                Begin Your Healing Journey
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
